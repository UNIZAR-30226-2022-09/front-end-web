import { Link } from 'react-router-dom'

const Login = () => {


  return (
    <div className="md:w-3/5 bg-carne">
      <h1 className='text-verde text-5xl
      ml-7 mt-7 font-noto'>Alejandria</h1>

      <h1 className="text-black font-roboto text-3xl ml-7 mt-14">Inicia sesion y continua<span
          className="font-noto text-verde"> {''}Aprendiendo</span></h1>

      <div className="p-5 md:flex md:justify-center">
        <div className="md:w-2/3 lg:w-2/3">
          <form className="my-6 bg-white shadow rounded-lg p-10">
              <div className="my-5">
                <label 
                  className="uppercase text-verde font-roboto block text-xl"
                  htmlFor="email"
                >Nombre de usuario o email</label>
                <input 
                  id="email"
                  type="Nombre de usuario o email"
                  placeholder="Introduzca su nombre de usuario o email"
                  className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                  
                />
              </div>

              <div className="my-5">
                <label 
                  className="uppercase text-verde font-roboto block text-xl"
                  htmlFor="contraseña"
                >Contraseña</label>
                <input 
                  id="contraseña"
                  type="Contraseña"
                  placeholder="Introduzca su contraseña"
                  className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                />
              </div>

              <input 
                type="submit"
                value="Iniciar sesion"
                className="bg-verde w-full py-3 text-white uppercase rounded-xl 
                font-roboto mt-5 hover:bg-green-800"

              />
          </form>

          <nav className="lg:flex lg:justify-center mb-5 h-max">
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