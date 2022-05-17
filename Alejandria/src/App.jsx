import Login from "./Paginas/Login"
import Presentacion from "./layout/Presentacion"
import LayoutNavegacion from "./layout/LayoutNavegacion"
import {useState} from 'react'
import Registrar from "./Paginas/Registrar"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from "./Paginas/HomePage"
import NotificacionPage from "./Paginas/NotificacionPage"
import PublicarPage from "./Paginas/PublicarPage"
import ChatPage from "./Paginas/ChatPage"
import PerfilPage from "./Paginas/PerfilPage"
import ExternalUserPage from "./Paginas/ExternalUserPage"
import ModalRecom from "./components/ModalRecom"
import Modal from 'react-modal'

const customStylesRecom = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    height: '90%',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};


function App() {

  const [modalArticulo,setModalArticulo] = useState(true)
  const [modalRecom,setModalRecom] = useState(true)

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Presentacion />}>
            <Route index element={<Login />} />
            <Route path="registrar" element={<Registrar />} />                
          </Route>

          <Route path="/myAccount" element={<LayoutNavegacion />}>
            <Route index element={<HomePage />}/>
            <Route path="notificaciones" index element={<NotificacionPage />}/>
            <Route path="publicar" element={<PublicarPage />}/>
            <Route path="chat" index element={<ChatPage />}/>
            <Route path="perfil" index element={<PerfilPage />}/>
            <Route path="externalUser/:id" index element={<ExternalUserPage />}/>
          </Route>

          <Route path="/myAccount/publicar" element={<PublicarPage/>}>
            <Route path="compartir" element={<Modal isOpen={modalRecom} style={customStylesRecom}>
                <ModalRecom modalRecom={modalRecom} setModalRecom={setModalRecom}/>
              </Modal>}/>
          </Route>
          
        </Routes>
      </BrowserRouter>
  )
}

export default App
