import { Link } from 'react-router-dom'
import FormularioLog from '../components/FormularioLog'

const Login = () => {

  return (
    <div className="md:w-3/5 bg-carne">
      <h1 className='text-verde text-5xl
      ml-7 mt-7 font-noto'>Alejandria</h1>

      <h1 className="text-black font-roboto text-3xl ml-7 mt-14">Inicia sesion y continua<span
          className="font-noto text-verde"> {''}Aprendiendo</span></h1>

      <div className="p-5 md:flex md:justify-center">
        <div className="md:w-2/3 lg:w-2/3">
          <FormularioLog />    

          <nav className="lg:flex lg:justify-center mb-5">
            <Link
              className='block text-center my-5 text-verde text-sm uppercase'
              to="registrar"
            >¿No tienes una cuenta? Regístrate</Link>
          </nav>


        </div>
      </div>
    
    </div>
  )
}

export default Login