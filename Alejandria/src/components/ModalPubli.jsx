import {useEffect, useState} from 'react'
import CardPubli from "../components/CardPubli"
import CardRecomend from "../components/CardRecomend"


function ModalPubli(props) {
  const [infoPubli, setInfoPubli] = useState({});
  const [infoRecomend, setInfoRecomend] = useState({});
  // const [descripcion, setDescripcion] = useState('');
  // const [link, setLink] = useState('');
  // const [foto, setFoto] = useState('');

  // const [error, setError] = useState(false);

  // const [selected, setSelected] = useState([]);

  const obtenerInfoPubliApi = async () => {
    try {
      
      const urlDatos = `http://localhost:4000/publicaciones/${props.idPubliAMostrar}`
      const resDatos = await fetch(urlDatos)
      const resultDatos = await resDatos.json()
      console.log(resultDatos);
      setInfoPubli(resultDatos);

    } catch (error) {
      console.log(error);
    }
  }

  const obtenerRecomendApi = async () => {
    try {
      const urlRecomend = `http://localhost:4000/recomendaciones/${props.idPubliAMostrar}`
      const resRecomend = await fetch(urlRecomend)
      const resultRecomend = await resRecomend.json()
      console.log(resultRecomend);
      setInfoRecomend(resultRecomend);
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(() => {
    if(props.tipoPubli == true){ //es una publicacion
      obtenerInfoPubliApi()
    } else{
      obtenerRecomendApi()
    }
  }, []);



  const handleModal = () => {
    console.log('modal a falso');
    props.setModal(false)
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
                  {props.tipoPubli === true ? 
                    <CardPubli 
                      id={infoPubli.id}
                      fotoPerfil={infoPubli.fotoPerfil}
                      nick={infoPubli.nick}
                      portada={infoPubli.portada}
                      comentario={infoPubli.comentario}
                      nLikes={infoPubli.nLikes}
                      nComents={infoPubli.nComents}
                      nGuardados={infoPubli.nGuardados}
                    /> :

                    <CardRecomend
                      id={infoRecomend.id}
                      fotoPerfil={infoRecomend.fotoPerfil}
                      nick={infoRecomend.nick}
                      titArticulo={infoRecomend.titArticulo}
                      autorArticulo={infoRecomend.autorArticulo}
                      comentario={infoRecomend.comentario}
                      nLikes={infoRecomend.nLikes}
                      nComents={infoRecomend.nComents}
                      nGuardados={infoRecomend.nGuardados}
                    />  

                  }
              </div>
          </div>
      </div>
  </div>
    
  )
}

export default ModalPubli
