import CardPubli from "../components/CardPubli"
import CardRecomend from "../components/CardRecomend"
import ModalPerfil from "../components/ModalPerfil"
import { useNavigate } from 'react-router-dom'

import {useEffect, useState} from 'react'
import useDarkmode from "../hook/useDarkmode";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile} from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp} from '@fortawesome/free-solid-svg-icons'
import { faMoon} from '@fortawesome/free-solid-svg-icons'
import { faSun} from '@fortawesome/free-solid-svg-icons'



function PerfilPage() {
  const navigate = useNavigate()

  const [colorTheme, setTheme] = useDarkmode();
  const [modal, setModal] = useState(false);
  const [datos, setDatos] = useState({});
  const [reversedItems, setReversedItems] = useState([]);

  const [publicaciones, setPublicaciones] = useState([])
  const [datosUser, setDatosUser] = useState([])
  const [recomendaciones, setRecomendaciones] = useState([])
  const [guardados, setGuardados] = useState([])
  const [cont, setCont] = useState(0)

  const [offsetGuardados, setOffsetGuardados] = useState(0)
  const [offsetArtic, setOffsetArtic] = useState(0)
  const [offsetRecomend, setOffsetRecomend] = useState(0)

  const [longResultadoGuardados, setLongResultadoGuardados] = useState(0)
  const [longResultadoRecomend, setLongResultadoRecomend] = useState(0)
  const [longResultadoArtic, setLongResultadoArtic] = useState(0)





  function refreshPage() {
    window.location.reload(false);
  }

  function myFunct(guardado, i){
    
    if(guardado.tipo === 1){
      return  <CardPubli
                //revisar key e id
                key={i}
                id={guardado.id}

                pdf={guardado.pdf}
                portada={guardado.portada}
                foto_de_perfil={guardado.foto_de_perfil}
                usuario={guardado.usuario}
                descripcion={guardado.descripcion}
                nlikes={guardado.nlikes}
                likemio={guardado.likemio}
                ncomentarios={guardado.ncomentarios}
                nguardados={guardado.nguardados}
                guardadomio={guardado.guardadomio}
              /> 
    }else{
      return  <CardRecomend
                key={i}
                id={guardado.id}
                
                titulo={guardado.titulo}
                autor={guardado.autor}
                descripcion={guardado.descripcion}
                link={guardado.link}
                usuario={guardado.usuario}
                foto_de_perfil={guardado.foto_de_perfil}
                nlikes={guardado.nlikes}
                likemio={guardado.likemio}
                ncomentarios={guardado.ncomentarios}
                nguardados={guardado.nguardados}
                guardadomio={guardado.guardadomio}
                />
    }
    
    
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
        // console.log('result',  result);
        
        const reverse = result.map(item => item).reverse();
        // console.log('reverse',  reverse);
  
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
      setCont(prevCont => prevCont + 1)
      const urlDatos = 'http://51.255.50.207:5000/mostrarPerfil'
      const resDatos = await fetch(urlDatos, {
        headers : {
          'Content-Type' : 'application/json',
          'token' : token,
          'nick' : nick
        }
      })
      const resultDatos = await resDatos.json()

      console.log('resultDatos', resultDatos);

      setDatosUser(resultDatos);
      // console.log('datosUser', resultDatos);

      var tematicas = []
      let label = ''
      for (var i = 0; i < resultDatos.tematicas.length; i++) {
        switch (resultDatos.tematicas[i]) {
          case 'Biologia':
            label = 'Biolog??a'
            break;
          case 'C.Sociales':
            label = 'C.Sociales'
            break;
          case 'Economia':
            label = 'Econom??a'
            break;
          case 'Electronica':
            label = 'Electr??nica'
            break;
          case 'Filologia':
            label = 'Filolog??a'
            break;
          case 'Fisica':
            label = 'F??sica'
            break;
          case 'Filosofia':
            label = 'Filosof??a'
            break;
          case 'Geologia':
            label = 'Geolog??a'
            break;
          case 'Historia':
            label = 'Historia'
            break;
          case 'Informatica':
            label = 'Inform??tica'
            break;
          case 'Ingenieria':
            label = 'Ingenier??a'
            break;
          case 'Matematicas':
            label = 'Matem??ticas'
            break;
          case 'Medicina':
            label = 'Medicina'
            break;
          case 'Mecanica':
            label = 'Mec??nica'
            break;
          
          case 'Quimica':
            label = 'Qu??mica'
            break;
          default:
            console.log('No coincide niguna tematica');
        }
        let obj = {label: label, value: resultDatos.tematicas[i]}
        tematicas.push(obj);     
      }
      localStorage.setItem('tematicas', JSON.stringify(tematicas))

    } catch (error) {
      console.log(error);
    }
  }

  const obtenerGuardados = async (token, ofs) => {
    console.log('offset: ',ofs);

    try {
      const urlRecomend = 'http://51.255.50.207:5000/mostrarGuardadosPaginados'
      const resRecomend = await fetch(urlRecomend, {
        headers : {
          'Content-Type' : 'application/json',
          'offset' : ofs,
          'limit' : 6,
          'token' : token
        }
      })
      const resultRecomend = await resRecomend.json()
      // console.log('resultRecomend:', resultRecomend.fin);
      if(resultRecomend.fin == undefined){
        // let data = { boss: { name: "Peter", phone: "123" }, minion: { name: "Bob", phone: "456" }, slave: { name: "Pat", phone: "789" } },
        const result = Object.entries(resultRecomend).map(([id, values]) => ({ id, ...values }));
        // console.log('obtenerGuardados:', result);
        
        const reverse = result.map(item => item).reverse();

        setGuardados(prevPublis =>  prevPublis.concat(reverse));

        const longitud = reverse.length
        setTimeout(()=> {
          setLongResultadoGuardados(longitud)
          // console.log('longResultado', longResultado);
        },400)
      }else{
        setLongResultadoGuardados(0)

      }
      

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token'))
    const nick = JSON.parse(localStorage.getItem('nick'))
    
    obtenerDatosUserApi(token, nick)
    obtenerPubliApi(token, nick, offsetArtic)
    obtenerRecomendApi(token, nick, offsetRecomend)
    obtenerGuardados(token, offsetGuardados)

    const primeraVez = JSON.parse(localStorage.getItem('primeraVez'))
    setModal(primeraVez)
    if(!primeraVez){
      
    }

    // const nomUser = JSON.parse(localStorage.getItem('nikUser'))
    // setNick(nomUser)
    
    // const nom = JSON.parse(localStorage.getItem('nomUser'))
    // const desc = JSON.parse(localStorage.getItem('descripcion'))
    // const lk = JSON.parse(localStorage.getItem('link'))

    // setDatos({
    //   nombre: nom,
    //   descripcion: desc,
    //   link: lk
    // })

  }, []);

  const handleModal = () => {
    setModal(true)
    
  }

  const guardarDatos = dato => {
    setDatos(dato)    
  }

  const funcFoto = () => {
    // console.log('fotito', datosUser.foto_de_perfil + '?' + cont.toString()); 
    return(datosUser.foto_de_perfil + '?' + cont.toString())
    
  }
  
  const handleClickArticulos = () => {
    const nick = JSON.parse(localStorage.getItem('nick'))
    const token = JSON.parse(localStorage.getItem('token'))
    let prueba = offsetArtic
    prueba = prueba + 1
    setOffsetArtic(prueba)
    // console.log('offset: ',offset);
    obtenerPubliApi(token, nick, prueba)
    
  };

  const handleClickRecomend = () => {
    const nick = JSON.parse(localStorage.getItem('nick'))
    const token = JSON.parse(localStorage.getItem('token'))
    let prueba = offsetRecomend
    prueba = prueba + 1
    setOffsetRecomend(prueba)
    // console.log('offset: ',offset);
    obtenerRecomendApi(token, nick, prueba)
    
  };

  const handleClickGuardados = () => {
    const token = JSON.parse(localStorage.getItem('token'))
    let prueba = offsetGuardados
    prueba = prueba + 1
    setOffsetGuardados(prueba)
    // console.log('offset: ',offset);
    obtenerGuardados(token, prueba)
    
  };

  return (
      <div className="border-l-2 dark:bg-gray-900 dark:text-white dark:border-l-dorado transition duration-500">
        <div className="px-3 pt-3 ">
        <div className="h-[13vh] md:h-[11vh]  flex space-x-5 items-center">
            <div className="w-1/5">
              <div className="rounded-full h-24 w-24 items-center justify-center overflow-hidden">
                <img className="w-full h-full" src={funcFoto()} alt="user image" referrerPolicy="origin" />
                
                
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
          <div>
              <button onClick={() => setTheme(colorTheme)}>
                {colorTheme === 'light' 
                ? 
                <FontAwesomeIcon className=" w-14 h-14 pr-3" icon={faSun} /> 
                : 
                <FontAwesomeIcon className=" w-14 h-14 pr-3" icon={faMoon} />
                }
                
              </button>
          </div>
      </div>
      
      <div className="h-[15vh]">
        <div className="text-2xl font-bold">{datosUser.nombre_de_usuario}</div>
        <div className="text-1xl gap-2 transition-all items-center font-roboto">@{datosUser.nick}</div>
        <h1 className="mt-2 text-justify font-roboto"> 
          {datosUser.descripcion}
        </h1>
        <h1 className="py-2 text-justify font-roboto text-blue-500">
          <a target="_blank" href={datosUser.link} rel="noreferrer noopener">{datosUser.link} </a>
        </h1>
      </div>
      
      <div className="h-[3vh] flex">
        <button className="text-verde w-5/6 rounded-lg p-1 border-solid border-2 border-verde font-roboto focus:bg-verde focus:text-white hover:bg-verdeClaro hover:text-white dark:border-dorado dark:text-dorado dark:hover:bg-doradoClaro dark:hover:text-white dark:hover:opacity-70"
                type="button"
                data-modal-toggle="modalEditarPerfil"
                onClick={handleModal}
        >
          EDITAR PERFIL
        </button>
        <button className="text-verde w-1/6 rounded-lg uppercase align-middle p-1 border-solid border-2 border-verde font-roboto focus:bg-verde focus:text-white hover:bg-verdeClaro hover:text-white dark:border-dorado dark:text-dorado dark:hover:bg-doradoClaro dark:hover:text-white dark:hover:opacity-70"
                type="button"
                data-modal-toggle="modalEditarPerfil"
                onClick={() => navigate('/myAccount/chat')}
        >
          mensajes
        </button>
      </div>
      {modal && <ModalPerfil  setModal={setModal} guardarDatos={guardarDatos} datosUser={datosUser} obtenerDatosUserApi={obtenerDatosUserApi} refreshPage={refreshPage}/>}

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
              aria-controls="tabs-homeJustify" aria-selected="true">Art??culos</a>
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
              focus:border-transparent"
              id="tabs-profile-tabJustify" data-bs-toggle="pill" data-bs-target="#tabs-profileJustify" role="tab"
              aria-controls="tabs-profileJustify" aria-selected="false">Recomendaciones</a>
          </li>
          <li className="nav-item flex-grow text-center" role="presentation">
            <a href="#tabs-messagesJustify" className="
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
            " id="tabs-messages-tabJustify" data-bs-toggle="pill" data-bs-target="#tabs-messagesJustify" role="tab"
              aria-controls="tabs-messagesJustify" aria-selected="false">Artic&Recom Guardadas</a>
          </li>
        </ul>
        <div className="tab-content" id="tabs-tabContentJustify">
          <div className="tab-pane fade show active" id="tabs-homeJustify" role="tabpanel"
            aria-labelledby="tabs-home-tabJustify">
            <div className="h-[62vh] md:h-[60vh] overflow-y-scroll scrollbar-hide text-center justify-center">
              {publicaciones.length === 0 ?
              <div className="text-gray-500 pt-5">
               <FontAwesomeIcon className=" w-20 h-20 " icon={faFile} />
               <div className="italic font-roboto text-3xl pt-2">
                  Todav??a no has publicado ning??n art??culo
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
            <div className="h-[62vh] md:h-[60vh] overflow-y-scroll scrollbar-hide text-center justify-center">
              {recomendaciones.length === 0 ?
                <div className="text-gray-500 pt-5">
                <FontAwesomeIcon className=" w-20 h-20 " icon={faThumbsUp} />
                <div className="italic font-roboto text-3xl pt-2">
                    Todav??a no has publicado ninguna recomendaci??n
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
          <div className="tab-pane fade" id="tabs-messagesJustify" role="tabpanel" aria-labelledby="tabs-profile-tabJustify">
          <div className="h-[62vh] md:h-[60vh] overflow-y-scroll scrollbar-hide text-center justify-center">
              {guardados.length === 0 ?
                <div className="text-gray-500 pt-5">
                <FontAwesomeIcon className=" w-20 h-20 " icon={faThumbsUp} />
                <div className="italic font-roboto text-3xl pt-2">
                    Todav??a no has guardado ninguna publicaci??n
                </div>
                </div>
               :<div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
                    {guardados.map(myFunct)}
               </div>}
              { longResultadoGuardados >  5 
              ? 
                <div className="flex flex-col items-center justify-center pb-4">
                  <button type="button" onClick={handleClickGuardados}>
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
  )
}

export default PerfilPage
