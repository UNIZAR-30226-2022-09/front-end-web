import {useEffect, useState} from 'react'
import CardPubli from "../components/CardPubli"
import CardRecomend from "../components/CardRecomend"


function ModalPubli(props) {
  
  const handleModal = () => {;
    props.setModal(props.modal)
  }

  return (
    <div id="medium-modal" tabIndex="-1" className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full bg-zinc-600 bg-opacity-50">
      <div className="relative p-4 w-full max-w-2xl h-full md:h-auto mx-auto my-auto">
          {/* <!-- Modal content --> */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              {/* <!-- Modal header --> */}
              <div className="flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600">
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                      Default modal
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
              <div className="p-3 space-y-3">
                  {props.tipo === 1 ? 
                    <CardPubli
                      //revisar key e id
                      key={props.cartelera.id}
                      id={props.cartelera.id}
      
                      pdf={props.cartelera.pdf}
                      portada={props.cartelera.portada}
                      foto_de_perfil={props.cartelera.foto_de_perfil}
                      usuario={props.cartelera.usuario}
                      descripcion={props.cartelera.descripcion}
                      nlikes={props.cartelera.nlikes}
                      likemio={props.cartelera.likemio}
                      ncomentarios={props.cartelera.ncomentarios}
                      nguardados={props.cartelera.nguardados}
                      guardadomio={props.cartelera.guardadomio}
                    /> :

                    <CardRecomend
                      key={props.cartelera.id}
                      id={props.cartelera.id}
                      
                      titulo={props.cartelera.titulo}
                      autor={props.cartelera.autor}
                      descripcion={props.cartelera.descripcion}
                      link={props.cartelera.link}
                      usuario={props.cartelera.usuario}
                      foto_de_perfil={props.cartelera.foto_de_perfil}
                      nlikes={props.cartelera.nlikes}
                      likemio={props.cartelera.likemio}
                      ncomentarios={props.cartelera.ncomentarios}
                      nguardados={props.cartelera.nguardados}
                      guardadomio={props.cartelera.guardadomio}
                    />  

                  }
              </div>
          </div>
      </div>
  </div>
    
  )
}

export default ModalPubli
