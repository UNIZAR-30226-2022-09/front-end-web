import {useEffect, useState} from 'react'
import CardNotiLike from "../components/CardNotiLike"
import CardNotiComent from "../components/CardNotiComent"
import ModalPubli from "../components/ModalPubli"
import useDarkmode from "../hook/useDarkmode";

function NotificacionPage() {
  const [notificaciones, setNotificaciones] = useState([])
  const [datosUser, setDatosUser] = useState([])
  const [colorTheme, setTheme] = useDarkmode();

  const [modal, setModal] = useState(false)
  const [tipoPubli, setTipoPubli] = useState() //false recomendacion, true publicación
  const [idPubliAMostrar, setIdPubliAMostrar] = useState(0)


  function myFunct(noti, i){
    if(noti.tipo === 1){
      return  <CardNotiLike
                key={i}
                
                nickUser={datosUser.nick}
                fotoPerfil={datosUser.fotoPerfil}

                idOtroUser={noti.idUser}
                nickOtroUser={noti.nick}
                idPubli={noti.idPublicacion}

                abrirModal={abrirModal}
                setTipoPubli={setTipoPubli}
              />
    }else{
      return <CardNotiComent 
                key={i}

                nickUser={datosUser.nick}
                fotoPerfil={datosUser.fotoPerfil}
                
                idOtroUser={noti.idUser}
                nickOtroUser={noti.nick}
                comentario={noti.comentario}
                idPubli={noti.idPublicacion}

                abrirModal={abrirModal}
                setTipoPubli={setTipoPubli}
              />
    }
  }

  
  const obtenerDatosUserApi = async () => {
    try {
      const urlDatos = 'http://localhost:4000/profile/1'
      const resDatos = await fetch(urlDatos)
      const resultDatos = await resDatos.json()
      setDatosUser(resultDatos);

    } catch (error) {
      console.log(error);
    }
  }

  const obtenerNotificacionesApi = async () => {
    try {
      const urlNotifs= 'http://localhost:4000/notificaciones'
      const resNotifs = await fetch(urlNotifs)
      const resultNotifs = await resNotifs.json()
      setNotificaciones(resultNotifs);

    } catch (error) {
      console.log(error);
    }
  }
  const abrirModal = id =>{
    console.log('id:',id);
    setIdPubliAMostrar(id)
    setModal(true)
  }
  
  useEffect(() => {

    obtenerDatosUserApi() 
    obtenerNotificacionesApi()   
  }, []);

  return (
    <div className="flex">
        <div className="w-3/5 border-l-2 border-r-2 dark:bg-black dark:border-l-dorado dark:border-r-dorado">
          <div className="h-screen overflow-y-scroll scrollbar-hide w-[90hw]">
            <div className="ml-3 mr-2 mt-3 items-center justify-center">
              <div className="w-full">
                {notificaciones.map(myFunct)}
                {modal && <ModalPubli idPubliAMostrar={idPubliAMostrar} setModal={setModal} tipoPubli={tipoPubli}/>}
              </div>         
            </div>
          </div>
      </div>
      
    </div>
    
  )
}

export default NotificacionPage
