import UsuarioChat from "../components/UsuarioChat"
import icon from "../public/icon.png"
import { useState,useEffect } from "react"
import { io } from "socket.io-client"



let socket



function ChatPage() {

  const [users,setUsers] = useState([]) //Conversaciones de un usuario
  const [nicks,setNicks] = useState([]) //Usuarios completos



  const obtenerDatosUser = async () => {
    try {
      const urlChat = 'http://51.255.50.207:5000/chat' 
      const urlMostrarPerfil = 'http://51.255.50.207:5000/mostrarPerfil' 

      const resDatos = await fetch(urlChat,{
        headers: {
          'Content-Type': 'application/json',
          'token': localStorage.getItem('token'),
          'current_user': localStorage.getItem('nick')
        }
      })

      const resultDatos = await resDatos.json()
      setNicks(resultDatos)

      const resP = await fetch(urlMostrarPerfil,{
        headers:{
          'Content-Type': 'application/json',
          'token': localStorage.getItem('token'),
          'nick': localStorage.getItem('nick')  
        }
      })
      const resulPerfil = await resP.json()

      setUsers(resulPerfil)
    } catch (error) {
      console.log(error)
    }

  }



  useEffect( () => {
    obtenerDatosUser()
  },[])

    return (
        <section className="flex h-screen overflow-hidden">

          <div className="md:w-3/12 container p-4 ">
            <h3 className="text-center dark:text-dorado
             font-noto font-bold text-verde text-3xl md:mt-3">
              @nombre_usuario
            </h3>

            <div className="overflow-auto h-screen mt-3">
              {/* {users.map( publicacion => {
                  return <UsuarioChat foto={users.foto_de_perfil} nombreUser={users.nick}/>
              })}      */}
            </div>
          </div>



          <div className="md:w-9/12 h-screen container bg-gray-100 dark:bg-gray-800 mt-3">

            <div className="px-12 py-6 border-b">
              <div className="flex">
                <div className="relative w-12 mr-4 ">
                  <img src={icon} />
                </div>
                <div>
                  <p className="text-verde font-noto text-2xl">@pepito_grillo</p>
                  <small className="text-gray-500 font-light text-base">En línea</small>
                </div>
              </div>

            </div>
            
            <div className="py-6 px-12 overflow-auto h-3/4">
              <div className="py-6 px-12">
                <div className="flex">
                  <img src={icon} className="self-end rounded-full w-12 mr-4"></img>
                  <div className=" bg-verde p-6 w-1/2 rounded-3xl rounded-bl-none shadow-lg">
                    <p className="font-bold font-roboto text-2xl mb-2 text-white">@Diego_Rodriguez</p>
                    <small className="text-slate-200 text-base font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. a consequuntur! </small>
                  </div> 
                </div>
              </div>

              <div className="py-6 px-12">
                <div className="flex flex-row-reverse">
                  <img src={icon} className="self-end rounded-full w-12 mr-4"></img>
                  <div className=" bg-gray-200 p-6 w-1/2 rounded-3xl rounded-br-none shadow-lg">
                    <p className="font-bold font-roboto text-2xl mb-2 text-verde">@Diego_Rodriguez</p>
                    <small className="text-verde text-base font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. a consequuntur! </small>
                  </div> 
                </div>
              </div>

              <div className="py-6 px-12">
                <div className="flex flex-row-reverse">
                  <img src={icon} className="self-end rounded-full w-12 mr-4"></img>
                  <div className=" bg-gray-200 p-6 w-1/2 rounded-3xl rounded-br-none shadow-lg">
                    <p className="font-bold font-roboto text-2xl mb-2 text-verde">@Diego_Rodriguez</p>
                    <small className="text-verde text-base font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. a consequuntur! </small>
                  </div> 
                </div>
              </div>

              <div className="py-6 px-12">
                <div className="flex">
                  <img src={icon} className="self-end rounded-full w-12 mr-4"></img>
                  <div className=" bg-verde p-6 w-1/2 rounded-3xl rounded-bl-none shadow-lg">
                    <p className="font-bold font-roboto text-2xl mb-2 text-white">@Diego_Rodriguez</p>
                    <small className="text-slate-200 text-base font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. a consequuntur! </small>
                  </div> 
                </div>
              </div>
            </div>
      
            <div className=" py-4 px-3 border-t flex">
              <input
                placeholder="Envía un mensaje..."
                type='text'
                className="px-2 py-2 bg-gray-300 object-center place-self-center rounded-lg w-full font-light focus:outline-none border-none mr-2 "
              />
              <button className="bg-verde rounded-lg px-4 text-white hover:bg-green-800">Enviar</button>

            </div>

            </div>

          
          

        </section>
    )
}

export default ChatPage
