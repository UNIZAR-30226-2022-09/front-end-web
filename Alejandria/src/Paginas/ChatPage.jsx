import UsuarioChat from "../components/UsuarioChat"
import icon from "../public/icon.png"
import { useState,useEffect } from "react"
import { io } from "socket.io-client"
import axios from "axios"
import MensajeChat from "../components/MensajeChat"
import useDarkmode from "../hook/useDarkmode";


//ENVIAR MENSAJE AL USUARIO
//mensaje dentro del usuario: GET((new_chat)) --> paso userOrigin userDest
// respuesta: roomId
// otra peticion GET(private/<string:roomId>)

//UNA VEZ EN EL CHAT, LISTA DE MENSAJES: 'nick' , 'message' , 'created_at'








function ChatPage() {
  const [colorTheme, setTheme] = useDarkmode();

  const [users,setUsers] = useState([]) //Conversaciones de un usuario
  const [nicks,setNicks] = useState([]) //Usuarios completos
  const [mensajes,setMensajes] = useState([])
  const [ningunMensaje,setNinguno] = useState(true)

  const [pinchado,setPinchado] = useState(false)
  const [usuario,setUsuario] = useState('')

  const obtenerDatosUser = async () => {
    try {
      const urlChat = 'http://51.255.50.207:5000/chat' 
      const urlMostrarPerfil = 'http://51.255.50.207:5000/mostrarPerfil' 

      const resDatos = await fetch(urlChat,{
        headers: {
          'Content-Type': 'application/json',
          'token': JSON.parse(localStorage.getItem('token')),
          'current_user': JSON.parse(localStorage.getItem('nick'))
        }
      })

      
      const resultDatos = await resDatos.json()
      console.log(resultDatos)
      setNicks(resultDatos)

      // for (const user of nicks ){
      //     const resP = await axios(urlMostrarPerfil,{
      //     headers: {
      //       'Content-Type': 'application/json',
      //       'token': JSON.parse(localStorage.getItem('token')),
      //       'nick': user
      //     }
      //   })
      //   console.log(resP)
      //   setUsers(users.concat(resP.data))
      //   console.log(resP)
      // }
          

    } catch (error) {
      console.log(error)
    }

  }



  useEffect( () => {
    obtenerDatosUser()
  },[])

    return (
        <section className="flex h-screen">


          {/* LISTA DE USUARIOS CON LOS QUE HE HABLADO */}
          <div className="md:w-3/12 p-4 dark:bg-gray-900 ">
            <h3 className="text-center dark:text-dorado
             font-noto font-bold text-verde text-3xl md:mt-3">
              {'@'.concat(JSON.parse(localStorage.getItem('nick')))}
            </h3>

            <div className="mt-3 overflow-hidden">
              {nicks.map( user => {
                  return <UsuarioChat setUsuario={setUsuario} setPinchado={setPinchado} setMensajes={setMensajes} nombreUser={user}/>
              })}     
            </div>
          </div>



          <div className="md:w-9/12 bg-gray-100 dark:bg-gray-900 mt-3 relative">
            
              {/* HEADER DEL LAYOUT DEL CHAT */}
              {pinchado ? (
                <div className="px-12 py-6 border-b">
                <div className="flex">
                  <div className="relative w-12 mr-4 ">
                    <img src={icon} />
                  </div>
                  <div>
                    <p className="text-verde font-noto text-2xl">{usuario}</p>
                    <small className="text-gray-500 font-light text-base">En línea</small>
                  </div>
                </div>
                </div>
              ): (
                <div className="px-12 py-6 border-b">
                <div className="flex">
                  <div className="relative w-12 mr-4 ">
                    <img src={icon} />
                  </div>
                  <div>
                    <p className="text-verde dark:text-dorado font-noto uppercase text-2xl">Alejandria</p>
                  </div>
                </div>
                </div>
              )}
              
              
              {/* AQUI COLOCO LOS MENSAJES  */}
          
              <div className="overflow-auto h-4/6">
                  {mensajes.map( mess => {
                    return <MensajeChat mensaje={mess.message} usuario={mess.nick}/>
                  })}
              </div>

              
                
              <div className=" py-4 px-3 border-t flex inset-x-0 bottom-0 absolute">
                <input
                  placeholder="Envía un mensaje..."
                  type='text'
                  className="px-2 py-2 bg-gray-300 object-center place-self-center rounded-lg w-full font-light focus:outline-none border-none mr-2 "
                />
                <button className="bg-verde dark:bg-dorado dark:hover:bg-doradoClaro rounded-lg px-4 text-white hover:bg-green-800">Enviar</button>
              </div>

             
          </div>

          
          

        </section>
    )
}

export default ChatPage
