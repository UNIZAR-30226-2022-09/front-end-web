import {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'

function ModalComentarios({setModal, comentarios}) {
  const navigate = useNavigate()
 
  const handleModal = () => {
    setModal(false)
  }

  useEffect(() => {
    console.log('props: ', comentarios);
  }, []);

  const handleClick = (e, user) => {
    console.log(user);

    const arroba = '@'
    const nick = JSON.parse(localStorage.getItem('nick'))

    if(e.target.innerHTML == arroba.concat(nick)){
      navigate('/myAccount/perfil')
    } else {
      navigate(`/myAccount/externalUser/${user}`)
    }

  }

  return (
    <div id="medium-modal" tabIndex="-1" className="overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full bg-zinc-600 bg-opacity-50">
      <div className="relative p-4 w-full max-w-2xl h-full md:h-auto mx-auto my-auto">
          {/* <!-- Modal content --> */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              {/* <!-- Modal header --> */}
              <div className="flex justify-between items-center p-3 rounded-t border-b dark:border-gray-600">
                  <h3 className="pl-3 text-left text-2xl font-roboto text-gray-900 dark:text-white">
                      <span className="font-noto text-verde dark:text-dorado">Comentarios ...</span>
                    </h3>
                  <button type="button" 
                          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" 
                          data-modal-toggle="medium-modal"
                          onClick={handleModal}
                  >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>  
                  </button>
              </div>
              {/* <!-- Modal body --> */}
              <div className="p-3 space-y-3  overflow-auto scrollbar-hide">
                  {comentarios.map( comentario => (
                  <div className="pb-2 gap-2 items-center border-b-2 dark:border-dorado" key={comentario.id}>
            
                      
                    <div className='hover:underline '>
                      <button
                          type="button"
                          className=" px-2 flex text-1xl gap-2 cursor-pointer transition-all items-center"
                          onClick={(e) => handleClick(e, comentario.nick)}
                        >
                          <img className="w-10 h-10 rounded-full shadow-sm" 
                          src={comentario.foto_de_perfil} 
                          alt="" 
                          /> 
                        <div className="font-roboto">@{comentario.nick}</div>
                      </button>
                    </div>

                    <h1 className="mt-2 text-justify font-roboto">
                      {comentario.comentario}
                    </h1>
        
                  </div>  
                  ))}
                  {/* {console.log('comentarios', comentarios)} */}
              </div>
          </div>
      </div>
  </div>
    
  )
}

export default ModalComentarios
