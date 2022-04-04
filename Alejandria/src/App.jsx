import Login from "./components/Login"
import Presentacion from "./layout/Presentacion"
import Registrar from "./Paginas/Registrar"
import OlvideContraseña from "./Paginas/OlvideContraseña"
import { BrowserRouter, Routes, Route} from "react-router-dom"

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Presentacion />}>
            <Route index element={<Login />} />
            <Route path="registrar" element={<Registrar />} />
            <Route path="olvide-contraseña" element={<OlvideContraseña />} />
          </Route> 
        </Routes>
      </BrowserRouter>
  )
}

export default App
