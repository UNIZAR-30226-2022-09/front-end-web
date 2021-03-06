import CardPubli from "../components/CardPubli"
import CardRecomend from "../components/CardRecomend"
import ModalPerfil from "../components/ModalPerfil"

import {useEffect, useState} from 'react'
import useDarkmode from "../hook/useDarkmode";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile} from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp} from '@fortawesome/free-solid-svg-icons'

function PerfilPage() {
  // const [colorTheme, setTheme] = useDarkmode();
  // const [modal, setModal] = useState(false);
  // const [datos, setDatos] = useState({});
  // const [nick, setNick] = useState(false);

  const [publicaciones, setPublicaciones] = useState([])
  const [datosUser, setDatosUser] = useState([])
  const [colorTheme, setTheme] = useDarkmode();
  const [recomendaciones, setRecomendaciones] = useState([])
  const [offsetArtic, setOffsetArtic] = useState(0)
  const [offsetRecomend, setOffsetRecomend] = useState(0)
  const [longResultadoArtic, setLongResultadoArtic] = useState(0)
  const [longResultadoRecomend, setLongResultadoRecomend] = useState(0)


  let { id } = useParams()
  // console.log('nick funtionn',id);
  
  const handleClick = () => {
    const token = JSON.parse(localStorage.getItem('token'))

    let nickObj = {
      nick :  id
    }

    const actualizarSeguidos = async () => {
      try {
        const url = 'http://51.255.50.207:5000/seguirUser'
        const respuesta = await fetch (url, {
          method: 'POST',
          body: JSON.stringify(nickObj),
          headers:{
              'Content-Type': 'application/json',
              'token' : token
          }
        })

        const resultado = await respuesta.json()
        
        
      } catch (error) {
        console.log(error);
      }
    }

    actualizarSeguidos()
    console.log(' actualizarSeguidos()');

    console.log('obtenerDatosUserApi');
    console.log('id', id);

    setTimeout(()=> {
      obtenerDatosUserApi(token, id)

    },400)

  }

  
  const obtenerPubliApi = async (token, nick, offs) => {
    try {
      const urlPubli = 'http://51.255.50.207:5000/mostrarArticulosPaginados'
      const resPubli = await fetch(urlPubli, {
        headers : {
          'Content-Type' : 'application/json',
          'nick' : nick,
          'offset' : offs,
          'limit' : 4,
          'token' : token
        }
      })
      const resultPubli = await resPubli.json()
      console.log('offset:', offs);
      console.log('resultPubli:', resultPubli);
      
      if(resultPubli.fin == undefined){
        const result = Object.entries(resultPubli).map(([id, values]) => ({ id, ...values }));
      
        const reverse = result.map(item => item).reverse();
  
        // console.log('resultado', result);
        setPublicaciones(prevPublis =>  prevPublis.concat(reverse));
        const longitud = reverse.length
        setTimeout(()=> {
          setLongResultadoArtic(longitud)
        },400)
      }else{
        setLongResultadoArtic(0)
      }
      
    } catch (error) {
      console.log(error);
    }
  }

  const obtenerRecomendApi = async (token, nick, offset) => {
    try {
      const urlRecomend = 'http://51.255.50.207:5000/mostrarRecomendacionesPaginadas'
      const resRecomend = await fetch(urlRecomend, {
        headers : {
          'Content-Type' : 'application/json',
          'nick' : nick,
          'offset' : offset,
          'limit' : 9,
          'token' : token
        }
      })
      const resultRecomend = await resRecomend.json()
      // console.log('resultRecomend:', resultRecomend);
      if(resultRecomend.fin == undefined){
        // let data = { boss: { name: "Peter", phone: "123" }, minion: { name: "Bob", phone: "456" }, slave: { name: "Pat", phone: "789" } },
        const result = Object.entries(resultRecomend).map(([id, values]) => ({ id, ...values }));

        const reverse = result.map(item => item).reverse();

        // console.log('resultado', result);
        setRecomendaciones(prevPublis =>  prevPublis.concat(reverse));
        const longitud = reverse.length
        setTimeout(()=> {
          setLongResultadoRecomend(longitud)
        },400)
      }else{
        setLongResultadoRecomend(0)
      }
      
    } catch (error) {
      console.log(error);
    }
  }

  const obtenerDatosUserApi = async (token, nick) => {

    try {
      const urlDatos = 'http://51.255.50.207:5000/mostrarPerfil'
      const resDatos = await fetch(urlDatos, {
        headers : {
          'Content-Type' : 'application/json',
          'token' : token,
          'nick' : nick
        }
      })
      const resultDatos = await resDatos.json()

      console.log('resultDatosssss', resultDatos);

      
      setDatosUser(resultDatos);
      // console.log('datosUser', resultDatos);

    } catch (error) {
      console.log(error);
    }
  }

  const handleClickArticulos = () => {
    const token = JSON.parse(localStorage.getItem('token'))
    let prueba = offsetArtic
    prueba = prueba + 1
    setOffsetArtic(prueba)
    // console.log('offset: ',offset);
    obtenerPubliApi(token, id, prueba)
    
  };

  const handleClickRecomend = () => {
    const token = JSON.parse(localStorage.getItem('token'))
    let prueba = offsetRecomend
    prueba = prueba + 1
    setOffsetRecomend(prueba)
    // console.log('offset: ',offset);
    obtenerRecomendApi(token, id, prueba)
    
  };

  useEffect(() => {
    // console.log('prueba nick useEffect', id);
    const token = JSON.parse(localStorage.getItem('token'))
    
    obtenerDatosUserApi(token, id)
    obtenerPubliApi(token, id, offsetArtic)
    obtenerRecomendApi(token, id, offsetRecomend)
    
  }, []);


  return (
      <div className="border-l-2 dark:bg-gray-900 dark:text-white dark:border-l-dorado transition duration-500">
        <div className="px-3 pt-3 ">
        <div className="h-[13vh] flex space-x-5 items-center">
            <div className="w-1/5">
              <div className="rounded-full h-24 w-24 items-center justify-center overflow-hidden">
                <img className="w-full h-full" src={datosUser.foto_de_perfil} alt="user image" />
              </div>                
            </div>
            <div className="w-4/5 flex space-x-10">
                <div className="font-roboto text-center text-2xl ">
                  <div>
                    {datosUser.nposts}
                  </div>
                  <div>
                    Posts
                  </div>
                </div>

                <div className="font-roboto text-center text-2xl">
                  <div>
                  {datosUser.nseguidores}
                  </div>
                  <div>
                    Seguidores
                  </div>
                </div>

                <div className="font-roboto text-center text-2xl">
                  <div>
                  {datosUser.nsiguiendo}
                  </div>
                  <div>
                    Siguiendo
                  </div>
                </div>
            </div>
      </div>
      
      <div className="h-[15vh]">
        <div className="text-2xl font-roboto">{datosUser.nombre_de_usuario}</div>
        <div className="text-1xl gap-2 transition-all items-center font-roboto">@{datosUser.nick}</div>
        <h1 className="mt-2 text-justify font-roboto"> 
          {datosUser.descripcion}
        </h1>
        <h1 className="py-2 text-justify font-roboto text-blue-400">
          <a target="_blank" href="{datos.link}">{datosUser.link}</a>
        </h1>
      </div>
      
      <div className="h-[3vh] ">
        <button className="text-verde rounded-lg p-1 w-full border-solid border-2 border-verde font-roboto  hover:bg-verdeClaro hover:text-white dark:border-dorado dark:text-dorado dark:hover:bg-doradoClaro dark:hover:text-white dark:hover:opacity-70"
                type="button"
                onClick={handleClick}
        >
          {datosUser.siguiendo === false ? "SEGUIR A ESTE USUARIO" : "DEJAR DE SEGUIR A ESTE USUARIO"}
        </button>
      </div>

      <div className="">
        <ul className="
            nav nav-tabs nav-justified
            flex flex-col
            md:flex-row
            flex-wrap
            list-none
            border-b-0
            pl-0
            mb-2" 
            id="tabs-tabJustify" role="tablist">
          <li className="nav-item flex-grow text-center" role="presentation">
            <a href="#tabs-homeJustify" className="
              nav-link
              w-full
              block
              font-roboto
              text-lg
              leading-tight
              uppercase
              border-x-0 border-t-0 border-b-2 border-transparent
              px-6
              py-3
              my-2
              hover:border-transparent hover:bg-gray-100
              focus:border-transparent
              active
            " id="tabs-home-tabJustify" data-bs-toggle="pill" data-bs-target="#tabs-homeJustify" role="tab"
              aria-controls="tabs-homeJustify" aria-selected="true">Publicaciones</a>
          </li>
          <li className="nav-item flex-grow text-center" role="presentation">
            <a href="#tabs-profileJustify" className="
              nav-link
              w-full
              block
              font-roboto
              text-lg
              leading-tight
              uppercase
              border-x-0 border-t-0 border-b-2 border-transparent
              px-6
              py-3
              my-2
              hover:border-transparent hover:bg-gray-100
              focus:border-transparent
            " id="tabs-profile-tabJustify" data-bs-toggle="pill" data-bs-target="#tabs-profileJustify" role="tab"
              aria-controls="tabs-profileJustify" aria-selected="false">Recomendaciones</a>
          </li>
        </ul>
        <div className="tab-content" id="tabs-tabContentJustify">
          <div className="tab-pane fade show active" id="tabs-homeJustify" role="tabpanel"
            aria-labelledby="tabs-home-tabJustify">
            <div className="h-[60vh] overflow-y-scroll scrollbar-hide text-center justify-center">
              {publicaciones.length === 0 ?
                <div className="text-gray-500 pt-5">
                  <FontAwesomeIcon className=" w-20 h-20 " icon={faFile} />
                  <div className="italic font-roboto text-3xl pt-2">
                      Todav??a no ha publicado ning??n art??culo
                  </div>
                </div>
                :<div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4">
                    {publicaciones.map( publicacion => (
                    <CardPubli
                      //revisar key e id
                      key={publicacion.id}
                      id={publicacion.id}

                      pdf={publicacion.pdf}
                      portada={publicacion.portada}
                      foto_de_perfil={publicacion.foto_de_perfil}
                      usuario={publicacion.usuario}
                      descripcion={publicacion.descripcion}
                      nlikes={publicacion.nlikes}
                      likemio={publicacion.likemio}
                      ncomentarios={publicacion.ncomentarios}
                      nguardados={publicacion.nguardados}
                      guardadomio={publicacion.guardadomio}
                    />  
                  ))}
                  </div>}
                  { longResultadoArtic >  3 
                  ? 
                    
                    <div className="flex flex-col items-center justify-center pb-4">
                      <button type="button" onClick={handleClickArticulos}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer text-verde h-8 w-8 hover:h-10 hover:w-10 dark:text-dorado" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </button>
                    </div>
                    
                  :
                    <div></div>
                  }
              
            </div>

          </div>
          <div className="tab-pane fade" id="tabs-profileJustify" role="tabpanel" aria-labelledby="tabs-profile-tabJustify">
            <div className="h-[60vh] overflow-y-scroll scrollbar-hide">
            <div className="h-[60vh] overflow-y-scroll scrollbar-hide text-center justify-center">
              {recomendaciones.length === 0 ?
                <div className="text-gray-500 pt-5">
                  <FontAwesomeIcon className=" w-20 h-20 " icon={faThumbsUp} />
                  <div className="italic font-roboto text-3xl pt-2">
                      Todav??a no ha publicado ninguna recomendaci??n
                  </div>
                </div>
               :<div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
                    {recomendaciones.map( recomendacion => (
                     <CardRecomend
                      key={recomendacion.id}
                      id={recomendacion.id}
                      
                      titulo={recomendacion.titulo}
                      autor={recomendacion.autor}
                      descripcion={recomendacion.descripcion}
                      link={recomendacion.link}
                      usuario={recomendacion.usuario}
                      foto_de_perfil={recomendacion.foto_de_perfil}
                      nlikes={recomendacion.nlikes}
                      likemio={recomendacion.likemio}
                      ncomentarios={recomendacion.ncomentarios}
                      nguardados={recomendacion.nguardados}
                      guardadomio={recomendacion.guardadomio}
                     />  
                   ))}
               </div>}
               { longResultadoRecomend >  8 
                    ? 
                      
                      <div className="flex flex-col items-center justify-center pb-4">
                        <button type="button" onClick={handleClickRecomend}>
                          <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer text-verde h-8 w-8 hover:h-10 hover:w-10 dark:text-dorado" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </button>
                      </div>
                      
                    :
                      <div></div>
                    }
            </div>
            </div>
          </div>
        </div>
      </div>
        </div>
      
    </div>
  )
}

export default PerfilPage
