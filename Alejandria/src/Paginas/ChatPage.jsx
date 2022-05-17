import UsuarioChat from "../components/UsuarioChat"
import icon from "../public/icon.png"


function ChatPage() {



    return (
        <section className="flex h-screen overflow-hidden">


          <div className="md:w-3/12 container p-4 ">
            <h3 className="text-center dark:text-dorado
             font-noto font-bold text-verde text-3xl md:mt-3">
              @nombre_usuario
            </h3>

            <div className="overflow-auto h-screen mt-3">
              <UsuarioChat />
              <UsuarioChat />
              <UsuarioChat />
              <UsuarioChat />
              <UsuarioChat />
              <UsuarioChat />
              <UsuarioChat />
              <UsuarioChat />
              <UsuarioChat />
              <UsuarioChat />
              <UsuarioChat />
              <UsuarioChat />
              <UsuarioChat />
              <UsuarioChat />
              <UsuarioChat />
              <UsuarioChat />
              <UsuarioChat />
              <UsuarioChat />    
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
      
            <div className=" p-6 border-t flex">
              <input
                placeholder="Envía un mensaje..."
                type='text'
                className="px-4 py-2 bg-gray-300 object-center place-self-center rounded-lg w-full font-light focus:outline-none border-none mr-2 "
              />
              <button className="bg-verde rounded-lg px-4 text-white hover:bg-green-800">Enviar</button>

            </div>

            </div>

          
          

        </section>
    )
}

export default ChatPage
