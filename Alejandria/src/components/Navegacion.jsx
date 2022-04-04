import Header from "./Header"
import {Link, useLocation} from 'react-router-dom'

function Navegacion() {
  const location = useLocation()
  const urlActual = location.pathname

  return (

      <div className="px-5 items-center w-1/6">
       
        <Header />
        <div className="grid hover:grid-cols-1 divide-y ">
            <Link to="/myAccount">
              <button
                type="submit"
                className="px-2 py-2 flex gap-2 text-2xl bg-transparent cursor-pointer transition-al focus:text-3xl hover:bg-verdeClaro rounded-xl hover:opacity-80"
              >
                <svg xmlns="http://www.w3.org/2000/svg" 
                      className= { urlActual === "/myAccount" ? "text-verde h-7 w-7  fill-current" : "text-black h-7 w-7  fill-current"}
                      viewBox="0 0 20 20">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                Home
              </button>
            </Link>
            
            <Link to="/myAccount/explorar">
              <button
                type="submit"
                className="px-2 py-2 flex gap-2 text-2xl bg-transparent cursor-pointer transition-al hover:bg-verdeClaro rounded-xl hover:opacity-80"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className={ urlActual === "/myAccount/explorar" ? "text-verde h-7 w-7  fill-current" : "text-black h-7 w-7  fill-current"} viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
                
                Explorar
              </button>
            </Link>
                
            <Link to="publicar">
                <button
                  type="submit"
                  className="px-2 py-2 flex gap-2 text-2xl bg-transparent cursor-pointer transition-al hover:bg-verdeClaro rounded-xl hover:opacity-80"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className={ urlActual === "/myAccount/publicar" ? "text-verde h-7 w-7  fill-current" : "text-black h-7 w-7  fill-current"} viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                  Publicar
                </button>
            </Link>

            <Link to="chat">
              <button
                type="submit"
                className="px-2 py-2 flex gap-2 text-2xl bg-transparent cursor-pointer transition-al hover:bg-verdeClaro rounded-xl hover:opacity-80"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className={ urlActual === "/myAccount/chat" ? "text-verde h-7 w-7  fill-current" : "text-black h-7 w-7  fill-current"} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Chat
              </button>
            </Link>

            <Link to="perfil">
                  <button
                type="submit"
                className="px-2 py-2 flex gap-2 text-2xl bg-transparent cursor-pointer transition-al hover:bg-verdeClaro rounded-xl hover:opacity-80"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className={ urlActual === "/myAccount/perfil" ? "text-verde h-7 w-7  fill-current" : "text-black h-7 w-7  fill-current"} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Perfil
              </button>
            </Link>

        </div>

      </div>
    
  )
}

export default Navegacion
