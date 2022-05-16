import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ModalComentarios from "./ModalComentarios"


function CardRecomend(props) {
  const navigate = useNavigate()
  const [mg, setMg] = useState(false)
  const [comment, setComment] = useState(false)
  const [guardar, setGuardar] = useState(false)
  const [modal, setModal] = useState(false)
  const [idPubliAMostrar, setIdPubliAMostrar] = useState(0)

  useEffect(() => {
    setMg(props.likemio)
    setGuardar(props.guardadomio)
  }, []);

  const obtenerComentarios = async (token, id) => {
    try {
      const urlRecomend = 'http://51.255.50.207:5000/verComentarios'
      const resRecomend = await fetch(urlRecomend, {
        headers : {
          'Content-Type' : 'application/json',
          'token' : token,
          'id' : id

        }
      })
      const resultPubli = await resRecomend.json()
      const result = Object.entries(resultPubli).map(([id, values]) => ({ id, ...values }));
      setComentarios(result);
      console.log('result: ', result);
    } catch (error) {
      console.log(error);
    }
  }

  const handleLike = () => {
    const token = JSON.parse(localStorage.getItem('token'))
    if(mg){     
      setMg(false)
      const actualizarLikes = async () => {
        let idObj = {
          id :  props.id
        }
        try {
          
          const url = 'http://51.255.50.207:5000/darLike'
          const respuesta = await fetch (url, {
            method: 'POST',
            body: JSON.stringify(idObj),
            headers:{
                'Content-Type': 'application/json',
                'token' : token
            }
          })
  
          const resultado = await respuesta.json()
          
          if (resultado.error != null){ //Si ha ido MAL
            setMg(true)
          }
        } catch (error) {
          console.log(error);
        }
      }
      actualizarLikes()
    }
    else{
      setMg(true)
        const actualizarLikes = async () => {
        let idObj = {
          id :  props.id
        }
        try {
          
          const url = 'http://51.255.50.207:5000/darLike'
          const respuesta = await fetch (url, {
            method: 'POST',
            body: JSON.stringify(idObj),
            headers:{
                'Content-Type': 'application/json',
                'token' : token
            }
          })
  
          const resultado = await respuesta.json()
          
          if (resultado.error != null){ //Si ha ido MAL
            setMg(true)
          }
        } catch (error) {
          console.log(error);
        }
      }
      actualizarLikes()
    }
    
  }

  const handleComment = () => {
    setIdPubliAMostrar(props.id)
    setTimeout(()=> {
      setModal(true)
    },400)
  }

  const handleGuardarPost = () => {
    const token = JSON.parse(localStorage.getItem('token'))

    let idObj = {}
    if(guardar){
      idObj = {
        id : props.id,
      }
      setGuardar(false)

      const actualizarGuardar = async () => {
        try {
            const url = 'http://51.255.50.207:5000/guardar'
            const respuesta = await fetch (url, {
            method: 'POST',
            body: JSON.stringify(idObj),
            headers:{
                'Content-Type': 'application/json',
                'token' : token
            }
          })
  
          const resultado = await respuesta.json()
          
          if (resultado.error != null){ //Si ha ido MAL
            setGuardar(true)
          }
        } catch (error) {
          console.log(error);
        }
      }
      actualizarGuardar()
    } else {
      idObj = {
        id : props.id,
      }
      setGuardar(true)

      const actualizarGuardar = async () => {
        try {
          const url = 'http://51.255.50.207:5000/guardar'
          const respuesta = await fetch (url, {
          method: 'POST',
          body: JSON.stringify(idObj),
          headers:{
              'Content-Type': 'application/json',
              'token' : token
          }
        })

        const resultado = await respuesta.json()
        
        if (resultado.error != null){ //Si ha ido MAL
          setGuardar(true)
        }
      } catch (error) {
        console.log(error);
      }
      }
      actualizarGuardar()
    }
  }

  const handleClick = () => {
    const nick = JSON.parse(localStorage.getItem('nick'))

    if(props.usuario == nick){
      navigate('/myAccount/perfil')
    } else {
      navigate(`/myAccount/externalUser/${props.usuario}`)
    }

  }

  return (
    <div className="bg-gray-200 px-5 py-5 mb-3 rounded-2xl border-2 border-verde dark:border-dorado dark:bg-gray-900 dark:text-white">
       
        <div className="mb-2 gap-2 items-center hover:underline ">
            
            <button
              type="button"
              className=" px-2 flex text-1xl gap-2 cursor-pointer transition-all items-center"
              onClick={handleClick}
            >
            <img className="w-10 h-10 rounded-full shadow-sm" 
             src={props.foto_de_perfil}  
             alt="" 
            />
            <div className="font-roboto">@{props.usuario} </div>
            </button>

        </div>
        <h1 className="text-xl mt-2 font-bold text-left">
          {props.titulo} - {props.autor}
        </h1>
        <h1 className="mt-2 text-justify font-roboto">
          {props.descripcion}
        </h1>
        {modal && <ModalComentarios setModal={setModal} idPubliAMostrar={idPubliAMostrar}/>}

        <h1 className="mt-2 text-justify font-roboto text-blue-500">
          <a href={props.link} target="_blank" rel="noreferrer noopener">
            {props.link}
          </a>
        </h1>
        
        <div className="flex space-x-5 ">
            <div className="flex mt-2 mb-2 gap-1">
              <button className="group"
                      onClick={handleLike}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className={ mg ? "h-6 w-6 text-red-600 dark:text-dorado fill-current" : "h-6 w-6"} fill={mg ? "" : "none" } viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
              <div className="font-roboto"> {(() => {
                                                      if (props.likemio && mg === false) {
                                                        return (
                                                          props.nlikes - 1
                                                        )
                                                      } else if(props.likemio && mg){
                                                        return (
                                                          props.nlikes
                                                        )
                                                      } else if(props.likemio  === false && mg){
                                                        return (
                                                          props.nlikes + 1
                                                        )
                                                      } else if(props.likemio  === false && mg === false){
                                                        return (
                                                          props.nlikes
                                                        )
                                                      }
                                                    })()}</div>
            </div>

            <div className="flex mt-2 mb-2 gap-1">
              <button className="group"
                      onClick={handleComment}
              >
                
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </button>
              <div className="font-roboto">{1 === 1 ? props.ncomentarios : props.ncomentarios}</div>
            </div>

            <div className="flex mt-2 mb-2 gap-1">
              <button className="group"
                      onClick={handleGuardarPost}
              >
                
                <svg xmlns="http://www.w3.org/2000/svg" className={guardar ? "h-6 w-6 text-black dark:text-dorado" : "h-6 w-6"} fill={guardar ? 'currentColor' : "none"} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                </svg>
              </button>
              <div className="font-roboto"> {(() => {
                                                      if (props.guardadomio && guardar === false) {
                                                        return (
                                                          props.nguardados - 1
                                                        )
                                                      } else if(props.guardadomio && guardar){
                                                        return (
                                                          props.nguardados
                                                        )
                                                      } else if(props.guardadomio  === false && guardar){
                                                        return (
                                                          props.nguardados + 1
                                                        )
                                                      } else if(props.guardadomio  === false && guardar === false){
                                                        return (
                                                          props.nguardados
                                                        )
                                                      }
                                                    })()}</div>

            </div>
            <button onClick={() => navigate('/myAccount/publicar', {state:{id:props.id,name:'prueba'}})}>
              <div className="flex mt-2 mb-2 gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                </svg>
              </div>
            </button>  
        </div>

        

      </div>

    
  )
}

export default CardRecomend
