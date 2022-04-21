import {useEffect, useState} from 'react'
import CardNotiLike from "../components/CardNotiLike"
import CardNotiComent from "../components/CardNotiComent"

function NotificacionPage() {
  const [notificaciones, setNotificaciones] = useState([])
  const [datosUser, setDatosUser] = useState([])


  function myFunct(noti){
    if(noti.tipo === 1){
      return  <CardNotiLike
                key={noti.tipo}
                
                nickUser={datosUser.nick}
                fotoPerfil={datosUser.fotoPerfil}

                nickOtroUser={noti.nick}
                idPubli={noti.idPublicacion}
              />
    }else{
      return <CardNotiComent 
                key={noti.tipo}

                nickUser={datosUser.nick}
                fotoPerfil={datosUser.fotoPerfil}

                nickOtroUser={noti.nick}
                comentario={noti.comentario}
                idPubli={noti.idPublicacion}
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

  useEffect(() => {

    obtenerDatosUserApi() 
    obtenerNotificacionesApi()   

  }, []);

  return (
    <div className="">
        <div className=" border-l-2 border-r-2 dark:bg-black dark:border-l-dorado dark:border-r-dorado">
          <div className="h-screen overflow-y-scroll scrollbar-hide w-[90hw]">
            <div className="ml-3 mr-2 mt-3 items-center justify-center">
              <div className="w-full">
                {notificaciones.map(myFunct)}
                

                {/*  
                notificacion => (
                     
                   
                    
                )
                
                  */}
                 
              </div>         
            </div>
          </div>
      </div>
      
    </div>
    
  )
}

export default NotificacionPage
