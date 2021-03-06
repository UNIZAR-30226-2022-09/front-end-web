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


function App() {


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
          
        </Routes>
      </BrowserRouter>
  )
}

export default App
