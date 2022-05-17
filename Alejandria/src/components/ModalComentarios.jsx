import {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'

function ModalComentarios({setModal, idPubliAMostrar, incrementarComentario}) {
  const navigate = useNavigate()
  const [offset, setOffset] = useState(0)
  const [comentarios, setComentarios] = useState([]);
  const [coment, setComent] = useState('');

  const handleModal = () => {
    setModal(false)
  }


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

  const obtenerComentarios = async (token, id, concatenar) => {
    try {
      const urlRecomend = 'http://51.255.50.207:5000/verComentarios'
      const resRecomend = await fetch(urlRecomend, {
        headers : {
          'Content-Type' : 'application/json',
          'token' : token,
          'id' : id
          // 'offset' : offset,
          // 'limit' : 4,

        }
      })
      const resultPubli = await resRecomend.json()
      const result = Object.entries(resultPubli).map(([id, values]) => ({ id, ...values }));
      if(concatenar){
        setComentarios(prevComents =>  prevComents.concat(result));
      }else{
        setComentarios(result)
      }
      console.log('result: ', result);
    } catch (error) {
      console.log(error);
    }
  }

  const publicarComentario = async (token, id) => {
    let idComent = {
      'id' : id,
      'comentario' : coment
    }
    try {
      const urlRecomend = 'http://51.255.50.207:5000/comentar'
      const resRecomend = await fetch(urlRecomend, {
        method: 'POST',
        body: JSON.stringify(idComent),
        headers : {
          'Content-Type' : 'application/json',
          'token' : token,
        }
      })
      const resultPubli = await resRecomend.json()
      console.log('respuestaServAlComentario: ', resultPubli);
      incrementarComentario()
      
      if(resultPubli.error == null){
        obtenerComentarios(token, id, false)
      }

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    setOffset(0)
    const token = JSON.parse(localStorage.getItem('token'))
    obtenerComentarios(token, idPubliAMostrar, true)
  }, []);

  const handleClickMas = () => {
    const token = JSON.parse(localStorage.getItem('token'))
    setOffset(prevOffset =>  prevOffset + 1)
    console.log('offset: ',offset);
    obtenerComentarios(token, idPubliAMostrar, true)
  };

  const handleClickEnviarComent = () => {
    const token = JSON.parse(localStorage.getItem('token'))
    publicarComentario(token, idPubliAMostrar)
    setComent('')
    
  };

  const handleChange = (e) => {
    setComent(e.target.value)
    
  };
  
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
                  { comentarios.length >  4 
                    ? 
                      
                      <div className="flex flex-col items-center justify-center pb-4">
                        <button type="button" onClick={handleClickMas}>
                          <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer text-verde h-8 w-8 hover:h-10 hover:w-10 dark:text-dorado" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </button>
                      </div>
                      
                    :
                      <div></div>
                  }

                <div className="flex">
                  <input className="font-roboto y-0p rounded-l-lg pl-2 border-t border-b border-l border-verde bg-white dark:bg-gray-600" placeholder="Escribe un comentario" onChange={handleChange} value={coment}/>
                  <button className="font-roboto rounded-r-lg bg-verde p-1 text-white uppercase dark:bg-dorado" onClick={handleClickEnviarComent}>ENVIAR</button>
                </div>
              </div>
          </div>
      </div>
  </div>
    
  )
}

export default ModalComentarios
