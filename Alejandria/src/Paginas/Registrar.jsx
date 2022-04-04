import { Link } from "react-router-dom"
import { useState } from "react"

const Registrar = () => {

  const [nombre,setNombre] = useState('')
  const [email,setEmail] = useState('')
  const [passwd,setPasswd] = useState('')

  return (
    <div className="md:w-3/5 bg-carne">
      <h1 className='text-verde text-5xl
      ml-7 mt-5 font-noto'>Alejandria</h1>

      <h1 className="text-black font-roboto text-3xl ml-7 mt-8">Crea tu cuenta 
      y disfruta de los mejores<span
          className="font-noto text-verde"> {''}Artículos</span></h1>

      <div className="p-2 md:flex md:justify-center">
        <div className="md:w-2/3 lg:w-2/3">
          <form className="my-5 bg-white shadow rounded-lg p-6">
              <div className="my-3">
                    <label 
                      className="uppercase text-verde font-roboto block text-xl"
                      htmlFor="nombre"
                    >Nombre</label>
                    <input 
                      id="nombre"
                      type="text"
                      placeholder="Introduzca su nombre de ususario"
                      className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                      value={nombre}
                      onChange={e => setNombre(e.target.value)}
                    />
              </div>

              <div className="my-5">
                <label 
                  className="uppercase text-verde font-roboto block text-xl"
                  htmlFor="email"
                >Correo electrónico</label>
                <input 
                  id="email"
                  type="Correo electrónico"
                  placeholder="Introduzca su email"
                  className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
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
                  value={passwd}
                  onChange={e => setPasswd(e.target.value)}
                />
              </div>

              <Link to="/myAccount/perfil">
                <input 
                  type="submit"
                  value="Crear cuenta"
                  className="bg-verde w-full py-3 text-white uppercase rounded-xl 
                  font-roboto mt-5 hover:bg-green-800"
                  
                />
              </Link>
          </form>

          <nav className="lg:flex lg:justify-center my-2">
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