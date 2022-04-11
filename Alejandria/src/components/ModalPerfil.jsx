import {useEffect, useState} from 'react'

function ModalPerfil({setModal, guardarDatos}) {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [link, setLink] = useState('');
 
  const [error, setError] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(error);
    if([nombre, descripcion, link].includes('')){
      console.log('hay error')
      setError(true)
      setTimeout(()=>{
        setError(false)
      },2000)
    }else{
      console.log('NO hay error')
      setError(false)
      guardarDatos({nombre, descripcion, link})
      setModal(false)
    }
  }

  return (
    <div>
      <div id="modalEditarPerfil" tabIndex="-1" className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full bg-zinc-600 bg-opacity-50">
          <div className="relative p-4 w-full max-w-5xl h-full md:h-auto ">
              
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  <div className="justify-between items-center p-5 rounded-t border-b dark:border-gray-600">
                      <h3 className="text-2xl font-roboto text-gray-900 dark:text-white">
                          Configura tu<span className="font-noto text-verde">{' '}Perfil!!</span>
                      </h3>
                  </div>
                  <form 
                    onSubmit={handleSubmit}
                    className=" my-5  text-center flex">
                      <div className="w-1/2">
                          <div className="pl-5 max-w-xl">
                            <label
                                className="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                                <span className="flex items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                    </svg>
                                    <span className="font-medium text-gray-600">
                                        Drop files to Attach, or {' '}
                                        <span className="text-blue-600 underline">browse</span>
                                    </span>
                                </span>
                                <input type="file" name="file_upload" className="hidden" />
                            </label>
                          </div>
                        </div>
                      <div className="w-1/2 space-y-5 pb-3">
                        <div>
                          <input
                            className="font-roboto y-0p rounded-lg pl-2 border border-verde bg-white" placeholder="Nombre Usuario *"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}

                          />
                        </div>
                        <div>
                          <input
                            className="font-roboto y-0p rounded-lg pl-2 border border-verde bg-white" placeholder="Biografía *"
                            value={descripcion}
                            onChange={(e) => setDescripcion(e.target.value)}

                          />
                        </div>
                        <div>
                          <input
                            className="font-roboto y-0p rounded-lg pl-2 border border-verde bg-white" placeholder="Link *"
                            value={link}
                            onChange={(e) => setLink(e.target.value)}

                          />
                        </div>
                        <div>
                            <input disabled={error} type="submit" className="p-3 space-x-2 rounded-b border-t text-white uppercase bg-verde hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-roboto rounded-lg text-sm px-5 py-2.5 text-center"
                                value="ACEPTAR"
                            />
                        </div>
                      </div>
                  </form>
                  <div className="">
                    {error && <div className=" text-center font-roboto bg-red-800 text-white uppercase rounded-bl-lg rounded-br-lg">Todos los campos son obligatorios</div> }

                  </div>
                  
              </div>
          </div>
      </div>
      
    </div>
  )
}

export default ModalPerfil
