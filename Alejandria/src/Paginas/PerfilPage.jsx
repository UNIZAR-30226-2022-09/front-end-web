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
  
  const obtenerPubliApi = async (token, nick) => {
    try {
      const urlPubli = 'http://51.255.50.207:5000/mostrarArticulos'
      const resPubli = await fetch(urlPubli, {
        headers : {
          'Content-Type' : 'application/json',
          'nick' : nick,
          'token' : token
        }
      })
      const resultPubli = await resPubli.json()
      // console.log('resultPubli:', resultPubli);

      const result = Object.entries(resultPubli).map(([id, values]) => ({ id, ...values }));
      // console.log('result',  result);
      
      const reverse = result.map(item => item).reverse();
      // console.log('reverse',  reverse);

      setPublicaciones(reverse);
    } catch (error) {
      console.log(error);
    }
  }

  const obtenerRecomendApi = async (token, nick) => {
    try {
      const urlRecomend = 'http://51.255.50.207:5000/mostrarRecomendaciones'
      const resRecomend = await fetch(urlRecomend, {
        headers : {
          'Content-Type' : 'application/json',
          'nick' : nick,
          'token' : token
        }
      })
      const resultRecomend = await resRecomend.json()
      // console.log('resultRecomend:', resultRecomend);
      // let data = { boss: { name: "Peter", phone: "123" }, minion: { name: "Bob", phone: "456" }, slave: { name: "Pat", phone: "789" } },
      const result = Object.entries(resultRecomend).map(([id, values]) => ({ id, ...values }));

      const reverse = result.map(item => item).reverse();

      // console.log('resultado', result);
      setRecomendaciones(reverse);
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

      // console.log('resultDatos', resultDatos);

      setDatosUser(resultDatos);
      // console.log('datosUser', resultDatos);

      var tematicas = []
      let label = ''
      for (var i = 0; i < resultDatos.tematicas.length; i++) {
        switch (resultDatos.tematicas[i]) {
          case 'Biologia':
            label = 'Biología'
            break;
          case 'C.Sociales':
            label = 'C.Sociales'
            break;
          case 'Economia':
            label = 'Economía'
            break;
          case 'Electronica':
            label = 'Electrónica'
            break;
          case 'Filologia':
            label = 'Filología'
            break;
          case 'Fisica':
            label = 'Física'
            break;
          case 'Filosofia':
            label = 'Filosofía'
            break;
          case 'Geologia':
            label = 'Geología'
            break;
          case 'Historia':
            label = 'Historia'
            break;
          case 'Informatica':
            label = 'Informática'
            break;
          case 'Ingenieria':
            label = 'Ingeniería'
            break;
          case 'Matematicas':
            label = 'Matemáticas'
            break;
          case 'Medicina':
            label = 'Medicina'
            break;
          case 'Mecanica':
            label = 'Mecánica'
            break;
          
          case 'Quimica':
            label = 'Química'
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

  const obtenerGuardados = async (token) => {
    try {
      const urlRecomend = 'http://51.255.50.207:5000/Guardados'
      const resRecomend = await fetch(urlRecomend, {
        headers : {
          'Content-Type' : 'application/json',
          'token' : token
        }
      })
      const resultRecomend = await resRecomend.json()
      // console.log('resultRecomend:', resultRecomend);
      // let data = { boss: { name: "Peter", phone: "123" }, minion: { name: "Bob", phone: "456" }, slave: { name: "Pat", phone: "789" } },
      const result = Object.entries(resultRecomend).map(([id, values]) => ({ id, ...values }));
      // console.log('obtenerGuardados:', result);
      
      const reverse = result.map(item => item).reverse();

      setGuardados(reverse);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token'))
    const nick = JSON.parse(localStorage.getItem('nick'))
    obtenerDatosUserApi(token, nick)
    obtenerPubliApi(token, nick)
    obtenerRecomendApi(token, nick)
    obtenerGuardados(token)

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
  return (
      <div className="border-l-2 dark:bg-gray-900 dark:text-white dark:border-l-dorado transition duration-500">
        <div className="px-3 pt-3 ">
        <div className="h-[13vh] md:h-[11vh]  flex space-x-5 items-center">
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
              aria-controls="tabs-homeJustify" aria-selected="true">Artículos</a>
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
                  Todavía no has publicado ningún artículo
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
                  {/* {myFunctPublicaciones()}  */}
                  
                </div>}
              
            </div>

          </div>
          <div className="tab-pane fade" id="tabs-profileJustify" role="tabpanel" aria-labelledby="tabs-profile-tabJustify">
            <div className="h-[62vh] md:h-[60vh] overflow-y-scroll scrollbar-hide text-center justify-center">
              {recomendaciones.length === 0 ?
                <div className="text-gray-500 pt-5">
                <FontAwesomeIcon className=" w-20 h-20 " icon={faThumbsUp} />
                <div className="italic font-roboto text-3xl pt-2">
                    Todavía no has publicado ninguna recomendación
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
            </div>
          </div>
          <div className="tab-pane fade" id="tabs-messagesJustify" role="tabpanel" aria-labelledby="tabs-profile-tabJustify">
          <div className="h-[62vh] md:h-[60vh] overflow-y-scroll scrollbar-hide text-center justify-center">
              {guardados.length === 0 ?
                <div className="text-gray-500 pt-5">
                <FontAwesomeIcon className=" w-20 h-20 " icon={faThumbsUp} />
                <div className="italic font-roboto text-3xl pt-2">
                    Todavía no has guardado ninguna publicación
                </div>
                </div>
               :<div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
                    {guardados.map(myFunct)}
               </div>}
            </div>
          </div>
        </div>
      </div>
        </div>
      
    </div>
  )
}

export default PerfilPage
