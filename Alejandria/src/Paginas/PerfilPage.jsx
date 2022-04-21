import CardPubli from "../components/CardPubli"
import CardRecomend from "../components/CardRecomend"
import ModalPerfil from "../components/ModalPerfil"

import {useEffect, useState} from 'react'

function PerfilPage() {
  
  const [modal, setModal] = useState(false);
  const [datos, setDatos] = useState({});
  const [nick, setNick] = useState(false);

  const [publicaciones, setPublicaciones] = useState([])
  const [datosUser, setDatosUser] = useState([])
  const [recomendaciones, setRecomendaciones] = useState([])

  function refreshPage() {
    window.location.reload(false);
  }
  
  const obtenerPubliApi = async () => {
    try {
      const urlPubli = 'http://localhost:4000/publicaciones'
      const resPubli = await fetch(urlPubli)
      const resultPubli = await resPubli.json()
      setPublicaciones(resultPubli);
    } catch (error) {
      console.log(error);
    }
  }

  const obtenerRecomendApi = async () => {
    try {
      const urlRecomend = 'http://localhost:4000/recomendaciones'
      const resRecomend = await fetch(urlRecomend)
      const resultRecomend = await resRecomend.json()
      setRecomendaciones(resultRecomend);
    } catch (error) {
      console.log(error);
    }
  }

  const obtenerDatosUserApi = async () => {
    try {
      const urlDatos = 'http://localhost:4000/profile/1'
      const resDatos = await fetch(urlDatos)
      const resultDatos = await resDatos.json()
      setDatosUser(resultDatos);

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {

    obtenerDatosUserApi()
    obtenerPubliApi()
    obtenerRecomendApi()

    const primeraVez = JSON.parse(localStorage.getItem('primeraVez'))
    setModal(primeraVez)

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
      <div className="border-l-2 ">
        <div className="mx-3 mt-3 ">
        <div className="flex space-x-5 items-center">
            <div className="">
                <img className="w-30 h-30 rounded-full border border-gray-100 shadow-sm" 
                  src={datosUser.fotoPerfil} 
                  alt="" 
                />
                
                <div className="text-2xl font-roboto">{datosUser.nombre}</div>
                
                <div className="text-1xl gap-2 cursor-pointer transition-all items-center font-roboto">@{datosUser.nick}</div>
                
            </div>
            <div className=" flex space-x-14">
                <div className="font-roboto text-center text-2xl">
                  <div>
                    {datosUser.nPost}
                  </div>
                  <div>
                    Posts
                  </div>
                </div>

                <div className="font-roboto text-center text-2xl">
                  <div>
                  {datosUser.nSeguidores}
                  </div>
                  <div>
                    Seguidores
                  </div>
                </div>

                <div className="font-roboto text-center text-2xl">
                  <div>
                  {datosUser.nSiguiendo}
                  </div>
                  <div>
                    Siguiendo
                  </div>
                </div>
          </div>
      </div>
      
      <div className="">
        <h1 className="mt-2 text-justify font-roboto"> 
          {datosUser.descripcion}
        </h1>
        <h1 className="py-2 text-justify font-roboto text-blue-600">
          <a target="_blank" href="{datos.link}">{datosUser.link}</a>
        </h1>
      </div>
      
      <div>
        <button className="text-verde rounded-lg p-1 w-full border-solid border-2 border-verde font-roboto focus:bg-verde focus:text-white hover:bg-verdeClaro hover:text-white"
                type="button"
                data-modal-toggle="modalEditarPerfil"
                onClick={handleModal}
        >
          EDITAR PERFIL
        </button>
      </div>
      {modal && <ModalPerfil  setModal={setModal} guardarDatos={guardarDatos} datosUser={datosUser} obtenerDatosUserApi={obtenerDatosUserApi} refreshPage={refreshPage}/>}

      <div>
        <ul className="
            nav nav-tabs nav-justified
            flex flex-col
            md:flex-row
            flex-wrap
            list-none
            border-b-0
            pl-0
            mb-4
          " id="tabs-tabJustify" role="tablist">
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
              aria-controls="tabs-messagesJustify" aria-selected="false">Publi&Recom Guardadas</a>
          </li>
        </ul>
        <div className="tab-content" id="tabs-tabContentJustify">
          <div className="tab-pane fade show active" id="tabs-homeJustify" role="tabpanel"
            aria-labelledby="tabs-home-tabJustify">
            <div className="h-[60vh] overflow-y-scroll">
              <div className="grid grid-cols-3 gap-4">
                  {publicaciones.map( publicacion => (
                    <CardPubli
                      key={publicacion.id}
                      id={publicacion.id}
                      fotoPerfil={publicacion.fotoPerfil}
                      nick={publicacion.nick}
                      portada={publicacion.portada}
                      comentario={publicacion.comentario}
                      nLikes={publicacion.nLikes}
                      nComents={publicacion.nComents}
                      nGuardados={publicacion.nGuardados}
                    />  
                  ))}    
              </div>
            </div>

          </div>
          <div className="tab-pane fade" id="tabs-profileJustify" role="tabpanel" aria-labelledby="tabs-profile-tabJustify">
            <div className="h-[60vh] overflow-y-scroll scrollbar-hide">
              <div className="grid grid-cols-3 gap-4">
              {recomendaciones.map( recomendacion => (
                    <CardRecomend
                      key={recomendacion.id}
                      id={recomendacion.id}
                      fotoPerfil={recomendacion.fotoPerfil}
                      nick={recomendacion.nick}
                      titArticulo={recomendacion.titArticulo}
                      autorArticulo={recomendacion.autorArticulo}
                      comentario={recomendacion.comentario}
                      nLikes={recomendacion.nLikes}
                      nComents={recomendacion.nComents}
                      nGuardados={recomendacion.nGuardados}
                    />  
                  ))} 

              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="tabs-messagesJustify" role="tabpanel" aria-labelledby="tabs-profile-tabJustify">
          <div className="h-[60vh] overflow-y-scroll">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <CardPubli />
                </div>
                <div>
                  <CardPubli />
                </div>
                <div>
                  <CardPubli />
                </div>
                <div>
                  <CardRecomend />
                </div>
                <div>
                  <CardRecomend />
                </div>
                <div>
                  <CardPubli />
                </div>
                <div>
                  <CardPubli />
                </div>
                <div>
                  <CardPubli />
                </div>
                <div>
                  <CardPubli />
                </div>
                <div>
                  <CardPubli />
                </div>
                <div>
                  <CardRecomend />
                </div>
                <div>
                  <CardPubli />
                </div>
                <div>
                  <CardRecomend />
                </div>
                <div>
                  <CardPubli />
                </div>
                <div>
                  <CardPubli />
                </div>
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
