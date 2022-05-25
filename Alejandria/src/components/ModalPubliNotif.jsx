import {useEffect, useState} from 'react'
import CardPubli from "../components/CardPubli"
import CardRecomend from "../components/CardRecomend"


function ModalPubliNotif(props) {


    const [publicacion,setPublicacion] = useState([])

  
  const handleModal = () => {
    props.setModal(!props.modal)
  }


  const obtenerPubli = async () => { 
    try {
      const urlDatos = 'http://51.255.50.207:5000/infoPost'

      const token = JSON.parse(localStorage.getItem('token'))

      const respuesta = await fetch(urlDatos,{
        headers: {
          'token': token,
          'id': props.idPubli,
        }
      })

      const resultado = await respuesta.json()
      const result = Object.entries(resultado).map(([id, values]) => ({ id, ...values }));

      setPublicacion(result)

    } catch (error) {
      console.log(error);
    }
  }

  useEffect( () => {
    obtenerPubli()
  },[])

  return (
    <div id="medium-modal" tabIndex="-1" className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full bg-zinc-600 bg-opacity-50">
      <div className="relative p-4 w-full max-w-2xl h-full md:h-auto mx-auto my-auto">
          {/* <!-- Modal content --> */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              {/* <!-- Modal header --> */}
              <div className="flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600">
                    <h3 className="text-xl text-verde text-center uppercase font-bold font-noto dark:text-white">
                        {props.tipo === 1 ? 'Publicacion' : 'Recomendacion'}
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
                  {publicacion.map( item => {
                      if(item.tipo === 1){
                        return <CardPubli
                                    key={item.id}
                                    id={item.id}
                                    pdf={item.pdf}
                                    portada={item.portada}
                                    foto_de_perfil={item.foto_de_perfil}
                                    usuario={item.usuario}
                                    descripcion={item.descripcion}
                                    nlikes={item.nlikes}
                                    likemio={item.likemio}
                                    ncomentarios={item.ncomentarios}
                                    nguardados={item.nguardados}
                                    guardadomio={item.guardadomio}
                                />
                      } else if (item.tipo === 2){
                        return <CardRecomend
                                    key={item.id}
                                    id={item.id}
                    
                                    titulo={item.titulo}
                                    autor={item.autor}
                                    descripcion={item.descripcion}
                                    link={item.link}
                                    usuario={item.usuario}
                                    foto_de_perfil={item.foto_de_perfil}
                                    nlikes={item.nlikes}
                                    likemio={item.likemio}
                                    ncomentarios={item.ncomentarios}
                                    nguardados={item.nguardados}
                                    guardadomio={item.guardadomio}
                                />
                      }
                     }) }
              </div>
          </div>
      </div>
  </div>
    
  )
}

export default ModalPubliNotif
