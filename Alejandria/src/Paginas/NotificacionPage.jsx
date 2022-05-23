import {useEffect, useState} from 'react'
import CardNotiLike from "../components/CardNotiLike"
import CardNotiComent from "../components/CardNotiComent"
import CardNotiSeguir from '../components/CardNotiSeguir'
import ModalPubli from "../components/ModalPubli"
import useDarkmode from "../hook/useDarkmode";


let notif = 
  {
    tipo: 1, //1 es like, 2 coment y 3 seguimiento
    nickEmisor: 'fulano', //El nick de la persona que me ha dado like, me ha seguido o me ha comentado
    idPubli: 'dfd', //id de la publicacion a la que me ha dado like o ha comentado, si tipo = 3 => idPubli:null
    idEmisor:'',
    fotoPerfil: '', //Mi foto de perfil
    comentario: '' //Si es de tipo 2, el comentario que ha hecho el 'nickEmisor' sino, comentario = null
  }

function NotificacionPage() {
  const [notificaciones, setNotificaciones] = useState([])
  const [datosUser, setDatosUser] = useState([])
  const [colorTheme, setTheme] = useDarkmode();

  const [modal, setModal] = useState(false)
  const [tipoPubli, setTipoPubli] = useState() //false recomendacion, true publicación
  const [idPubliAMostrar, setIdPubliAMostrar] = useState(0)


  function myFunct(noti, i){
    if(noti === 1){
      return  <CardNotiLike
                key={i}

                fotoPerfil={notificaciones.fotoPerfil}
                idOtroUser={notificaciones.idEmisor}
                nickUser={notificaciones.nickUser}
                nickOtroUser={notificaciones.nickEmisor}
                idPubli={notificaciones.idPubli}

                abrirModal={abrirModal}
                setTipoPubli={setTipoPubli}
              />
    }else if(noti === 2){
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
    } else {
        return <CardNotiSeguir 
                  fotoPerfil={notificaciones.fotoPerfil}
                  nickUser={notificaciones.nickUser} 
                  idOtroUser={notificaciones.idEmisor}
                  nickOtroUser={notificaciones.nickEmisor}
                  key={i}
                />
    }
  }

  
  const obtenerDatosUserApi = async () => {
    try {
      const urlDatos = 'http://51.255.50.207:5000/notifications'
      const resDatos = await fetch(urlDatos)
      const resultDatos = await resDatos.json()
      console.log(resultDatos)
      setNotificaciones(resultDatos);

    } catch (error) {
      console.log(error);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  }
  
  const abrirModal = id =>{
    console.log('id:',id);
    setIdPubliAMostrar(id)
    setModal(true)
  }
  
  useEffect(() => {
    obtenerDatosUserApi() 
  }, []);

  return (
    <div className="flex">
        <div className="w-3/5 border-l-2 border-r-2 dark:bg-gray-900 dark:border-l-dorado dark:border-r-dorado">
          <div className="h-screen overflow-y-scroll scrollbar-hide w-[90hw]">
            <div className="ml-3 mr-2 mt-3 items-center justify-center">
              <div className="w-full">
                {/* {notificaciones.map(myFunct(notificaciones.tipo,Math.random()))} */}
                <CardNotiLike 
                  fotoPerfil={''}
                  nickUser={'raul'} 
                  idOtroUser={44}
                  nickOtroUser={'pepe'}
                  idPubli={3}
                  abrirModal={abrirModal}
                  setTipoPubli={setTipoPubli}
                />
                {modal && <ModalPubli idPubliAMostrar={idPubliAMostrar} setModal={setModal} tipoPubli={tipoPubli}/>}
              </div>         
            </div>
          </div>
      </div>

      <div className='w-2/5 bg-bck-notif bg-cover'></div>
      
    </div>
  )
}

export default NotificacionPage