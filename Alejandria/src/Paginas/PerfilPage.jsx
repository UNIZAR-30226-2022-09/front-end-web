import CardPubli from "../components/CardPubli"
import CardRecomend from "../components/CardRecomend"
import ModalPerfil from "../components/ModalPerfil"

import {useEffect, useState} from 'react'
 
function PerfilPage() {
  
  const [modal, setModal] = useState(true);
  const [datos, setDatos] = useState({});

  const handleModal = () => {
    console.log('handleModal: modal=true');
    setModal(true)
  }

  const guardarDatos = dato => {
    console.log('dato:', dato);
    setDatos(dato)
  }

  return (
      <div className="border-l-2 ">
        <div className="mx-3 mt-3 ">
        <div className="flex space-x-5 items-center">
            <div className="">
                <img className="w-30 h-30 rounded-full border border-gray-100 shadow-sm" 
                  src="https://randomuser.me/api/portraits/women/81.jpg" 
                  alt="" 
                />
                
                <div className="text-2xl font-roboto">{datos.nombre}</div>
                <button
                  type="submit"
                  className="text-1xl gap-2 cursor-pointer transition-all items-center"
                > 
                  <div className="font-roboto">@nombreUsuario</div>
                </button>
            </div>
            <div className=" flex space-x-14">
                <div className="font-roboto text-center text-2xl">
                  <div>
                    10
                  </div>
                  <div>
                    Posts
                  </div>
                </div>

                <div className="font-roboto text-center text-2xl">
                  <div>
                    235
                  </div>
                  <div>
                    Seguidores
                  </div>
                </div>

                <div className="font-roboto text-center text-2xl">
                  <div>
                    176
                  </div>
                  <div>
                    Siguiendo
                  </div>
                </div>
          </div>
      </div>
      
      <div className="">
        <h1 className="mt-2 text-justify font-roboto"> 
          {datos.descripcion}
        </h1>
        <h1 className="py-2 text-justify font-roboto text-blue-600">
          <a target="_blank" href="{datos.link}">{datos.link}</a>
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
      {modal && <ModalPerfil  setModal={setModal} guardarDatos={guardarDatos} datos={datos} />}

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
              </div>
            </div>

          </div>
          <div className="tab-pane fade" id="tabs-profileJustify" role="tabpanel" aria-labelledby="tabs-profile-tabJustify">
            <div className="h-[60vh] overflow-y-scroll scrollbar-hide">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <CardRecomend />
                </div>
                <div>
                  <CardRecomend />
                </div>
                <div>
                  <CardRecomend />
                </div>
                <div>
                  <CardRecomend />
                </div>
                <div>
                  <CardRecomend />
                </div>
                <div>
                  <CardRecomend />
                </div>
                <div>
                  <CardRecomend />
                </div>
                <div>
                  <CardRecomend />
                </div>
                <div>
                  <CardRecomend />
                </div>
                <div>
                  <CardRecomend />
                </div>
                <div>
                  <CardRecomend />
                </div>
                <div>
                  <CardRecomend />
                </div>
                <div>
                  <CardRecomend />
                </div>

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
