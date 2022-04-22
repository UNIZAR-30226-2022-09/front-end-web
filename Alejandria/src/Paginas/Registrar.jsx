import { Link } from "react-router-dom"
import { useState } from "react"
import { faSmile } from "@fortawesome/free-regular-svg-icons"
import Alerta from "../components/Alerta"
import FormularioReg from "../components/FormularioReg"

const Registrar = () => {

  const [nick,setNick] = useState('')
  const [email,setEmail] = useState('')
  const [passwd,setPasswd] = useState('')

  return (
    <div className="md:w-3/5 bg-carne overflow-auto">
      <h1 className='text-verde text-5xl
      ml-7 mt-5 font-noto'>Alejandria</h1>

      <h1 className="text-black font-roboto text-3xl ml-7 mt-8">Crea tu cuenta 
      y disfruta de los mejores<span
          className="font-noto text-verde"> {''}Artículos</span></h1>

      <div className="p-2 md:flex md:justify-center lg:mt-5">
        <div className="md:w-2/3 lg:w-2/3">
          
          <FormularioReg />
          <nav className="lg:justify-center my-2">
            <Link
              className='block text-center my-5 text-verde text-sm uppercase'
              to="/"
            >¿Ya tienes una cuenta? Inicia Sesión</Link>
          </nav>
        </div>
      </div>
    
    </div>
  )
}

export default Registrar