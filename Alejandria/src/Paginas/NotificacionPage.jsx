import {useEffect, useState} from 'react'
import CardNotiLike from "../components/CardNotiLike"
import CardNotiComent from "../components/CardNotiComent"
import CardNotiSeguir from '../components/CardNotiSeguir'
import ModalPubliNotif from '../components/ModalPubliNotif'
import useDarkmode from "../hook/useDarkmode";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseUser } from '@fortawesome/free-solid-svg-icons'
import icon from "../public/bck-notif.png" 
import { Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios' 




function NotificacionPage() {
  const [notificaciones, setNotificaciones] = useState([])
  const [colorTheme, setTheme] = useDarkmode();

  const oscuro = (colorTheme === 'dark') ? false : true 

  const [idPubli,setPubli] = useState(undefined)

  const [offset,setOffset] = useState(0)
  

  const [modal, setModal] = useState(false)
  const [tipo, setTipo] = useState(undefined)

  const [longResultado, setLongResultado] = useState(null)


  const navigate = useNavigate()


  function myFunct(notificaciones, i){
    if(notificaciones.tipo === 1){
      return  <CardNotiLike
                key={i}

                fotoPerfil={notificaciones.foto_de_perfil}
                nickUser={JSON.parse(localStorage.getItem('nick'))}
                nickOtroUser={notificaciones.nickEmisor}
                idPubli={notificaciones.idPubli}
                setModal={setModal}
                setPubli={setPubli}
                setTipo={setTipo}
                // abrirModal={abrirModal(notificaciones.idPubli)}
                // setTipoPubli={tipoPubli}
              />
    }else if(notificaciones.tipo === 2){
      return <CardNotiComent 
                key={i}

                nickUser={JSON.parse(localStorage.getItem('nick'))}
                fotoPerfil={notificaciones.foto_de_perfil}
                
                nickOtroUser={notificaciones.nickEmisor}
                comentario={notificaciones.comentario}
                idPubli={notificaciones.idPubli}

                setModal={setModal}
                setPubli={setPubli}
                setTipo={setTipo}

                // abrirModal={abrirModal(notificaciones.idPubli)}
                // setTipoPubli={tipoPubli}
              />
    } else {
        return <CardNotiSeguir 
                  fotoPerfil={notificaciones.foto_de_perfil}
                  nickUser={JSON.parse(localStorage.getItem('nick'))} 
                  nickOtroUser={notificaciones.nickEmisor}
                  key={i}
                />
    }
  }

  
  const obtenerDatosUserApi = async () => {
    try {
      const urlDatos = 'http://51.255.50.207:5000/notificaciones'

      const token = JSON.parse(localStorage.getItem('token'))
      const respuesta = await fetch(urlDatos,{
        headers: {
          'token': token,
          'offset': offset,
          'limit': 4,
        }
      })

      const resultado = await respuesta.json()

      const result = Object.entries(resultado).map(([id, values]) => ({ id, ...values }));
      const reverse = result.map(item => item).reverse();

      console.log(resultado)

      if(resultado.fin === undefined){
        setNotificaciones((prevNotifs =>  prevNotifs.concat(reverse)))
      }

      setLongResultado(reverse.length)

    } catch (error) {
      console.log(error);
    }
  }

  
  // const abrirModal = id =>{
  //   console.log('id:',id);
  //   setIdPubliAMostrar(id)
  //   setModal(true)
  // }
  
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token'))
    if(token === null){
      navigate('/')
    }
    obtenerDatosUserApi() 
  }, []);


  const handleClick = () => {
    setOffset(1+offset)
    obtenerDatosUserApi()
  }

  

  return (
    <div className="flex">
        <div className="w-3/5 border-l-2 border-r-2 dark:bg-gray-800 dark:border-l-dorado dark:border-r-dorado">
          <div className="h-screen overflow-y-scroll scrollbar-hide w-[90hw]">
            <div className="ml-3 mr-2 mt-3 items-center justify-center">
              <div className="w-full">

                {notificaciones.length === 0 && (
                  <div className="text-gray-500 dark:text-white pt-5 text-center">
                    <FontAwesomeIcon icon={faHouseUser} size={'xl'} style={{color: oscuro ? 'white'  : '#27272a'}} />
                    <div className="italic font-roboto text-3xl pt-2">
                      Todavía no sigues a ningún usuario
                    </div>
                  </div>
                )}

                { notificaciones.map(notif => myFunct(notif,Math.floor(Math.random() * (19454543543543 - 1)) + 1)) } 
                
                { modal && <ModalPubliNotif idPubli={idPubli} setModal={setModal} modal={modal}/>}
                
              </div>     

              {longResultado > 3 && (
                  <div className="flex flex-col items-center justify-center pb-4">
                    <button type="button" onClick={handleClick}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer text-verde h-8 w-8 hover:h-10 hover:w-10 dark:text-dorado" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </button>
                  </div>
              )}
                
            
 
            </div>
          </div>
        </div>


        <div className='w-2/5 h-screen bg-bck-img bg-cover dark:bg-bck-dark'>
          {/* <img src={icon} /> */}
        </div>

    
      
    </div>
  )
}

export default NotificacionPage