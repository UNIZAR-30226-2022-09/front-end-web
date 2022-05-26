import {useEffect, useState} from 'react'
import { MultiSelect } from "react-multi-select-component";
import axios from 'axios'

const options = [
  { label: "Biología", value: "Biologia" },
  { label: "C.Sociales", value: "C.Sociales"},
  { label: "Economía", value: "Economia"},
  { label: "Electrónica", value: "Electronica"},
  { label: "Filología", value: "Filologia"},
  { label: "Física", value: "Fisica"},
  { label: "Filosofía", value: "Filosofia"},
  { label: "Geología", value: "Geologia"},
  { label: "Historia", value: "Historia"},
  { label: "Informática", value: "Informatica"},
  { label: "Ingeniería", value: "Ingenieria"},
  { label: "Matemáticas", value: "Matematicas"},
  { label: "Mecánica", value: "Mecanica"},
  { label: "Medicina", value: "Medicina"},
  { label: "Química", value: "Quimica"},
];


function ModalPerfil({setModal, guardarDatos, datosUser, refreshPage}) {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [link, setLink] = useState('');
  const [foto, setFoto] = useState();
  const [error, setError] = useState(false);
  const [selected, setSelected] = useState([]);

  
  useEffect(() => {
    const primeraVez = JSON.parse(localStorage.getItem('primeraVez'))
    if(!primeraVez){
      setNombre(datosUser.nombre_de_usuario)
      setDescripcion(datosUser.descripcion)
      setLink(datosUser.link)
      const tematicas = JSON.parse(localStorage.getItem('tematicas'))
      setSelected(tematicas)
    }

  }, []);


  
  const fileSelectedHandler = event => {
    console.log(event.target.files[0]);
    setFoto(event.target.files[0])
  };


  const handleSubmit = (e) => {
    e.preventDefault();
   
    //selected.length
    if( selected.length === 0){
      setError(true)  
    } else {
      setError(false)
      localStorage.setItem('primeraVez', JSON.stringify(false))
      setModal(false)
      localStorage.setItem('tematicas', JSON.stringify(selected))
      setSelected(JSON.stringify(selected)); 

      
      //-----------------------------------------------------------
      const prueba = {...datosUser}
      prueba.nombre_de_usuario = nombre
      prueba.descripcion = descripcion
      prueba.link = link

      const tematicas = []
      for (var i = 0; i < selected.length; i++) {
        tematicas[i] = selected[i].value
      }
      prueba.tematicas = tematicas

      console.log('Objeto prueba con valores modificados', prueba);


      const token = JSON.parse(localStorage.getItem('token'))
      const nick = JSON.parse(localStorage.getItem('nick'))
      
      const actuAPI = async (final) => { 
        try {        
          const respuesta = await fetch('http://51.255.50.207:5000/editarPerfil', {
            method : 'POST',
            body : JSON.stringify(prueba),
            headers : {
                'Content-Type' : 'application/json',
                'token' : token,
                'nick' : nick
            }
          })
          const resultado = await respuesta.json()
          console.log('resultado actuAPI', resultado);
        } catch (error) {
          console.log(error);
        }
      }

      const setImageAction = async () => {
        const formData = new FormData();
        formData.append(
            "nueva_foto", foto
        );
        const data = await axios.post("http://51.255.50.207:5000/actualizarImagen", formData, {
          headers: { 
              "Content-Type": "multipart/form-data", 
              'token' : token
          }
        });
    
        
        if (data) {
          console.log('Successfully uploaded image');
        } else {
          console.log('Error Found');
        }
      };
      

      actuAPI()
      if(foto != ''){
        setImageAction()
      }


      setTimeout(()=> {
        refreshPage()
      },300)
    }
  }

  return (
    <div>
      <div id="modalEditarPerfil" tabIndex="-1" className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full bg-zinc-600 bg-opacity-50">
          <div className="relative p-4 w-full max-w-5xl h-full md:h-auto text-center mx-auto my-auto">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-900 dark:text-black">
                  <div className=" p-5 rounded-t border-b dark:border-gray-600">
                      <h3 className="text-2xl font-roboto text-gray-900 dark:text-white">
                          Configura tu<span className="font-noto text-verde dark:text-dorado">{' '}Perfil!!</span>
                      </h3>
                  </div>
                  <form 
                    onSubmit={handleSubmit}
                    className="">
                      <div className="my-5 flex ">
                        <div className="w-1/2">
                            <div className="pl-5 max-w-xl ">
                              
                              <label
                                  className={ foto === '' ? "flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none dark:bg-gray-500" : "flex justify-center w-full h-32 px-4 transition bg-white border-2 border-green-300 border-dashed rounded-md appearance-none focus:outline-none dark:bg-gray-500 dark:border-dorado"}>
                                  <span className="flex items-center space-x-2">
                                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-600 dark:text-white" fill="none" viewBox="0 0 24 24"
                                          stroke="currentColor" strokeWidth="2">
                                          <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                      </svg>
                                      <span className="font-medium text-gray-600 dark:text-white">
                                          Drop files to Attach, or {' '}
                                          <span className="text-blue-400 underline">browse</span>
                                          
                                      </span>
                                  </span>
                                  <input type="file" className='hidden'
                                        onChange={fileSelectedHandler} 
                                      />
                              </label>
                            </div>
                        </div>
                        <div className="w-1/2 space-y-5 pb-3">
                          <div>
                            <input
                              className="font-roboto y-0p rounded-lg pl-2 border-2 border-verde bg-white dark:border-dorado dark:bg-gray-500 dark:text-white" placeholder="Nombre Usuario"
                              defaultValue={nombre}
                              onChange={(e) => 
                                setNombre(e.target.value)}


                            />
                          </div>
                          <div>
                            <input
                              className="font-roboto y-0p rounded-lg pl-2 border-2 border-verde bg- h-10 dark:border-dorado dark:bg-gray-500 dark:text-white" placeholder="Descripción"
                              defaultValue={descripcion}
                              maxLength={100}
                              onChange={(e) => 
                                setDescripcion(e.target.value)}
                            
                            />
                          </div>
                          <div>
                            <input
                              className="font-roboto y-0p rounded-lg pl-2 border-2 border-verde bg-white dark:border-dorado dark:bg-gray-500 dark:text-white" placeholder="Link"
                              defaultValue={link}
                              onChange={(e) => 
                              setLink(e.target.value)}
                            

                            />
                          </div>
                          <div>
                          {/* type="button" */}
                              <input  type="submit"  className="p-3 space-x-2 rounded-b border-t text-white uppercase bg-verde hover:bg-green-800  font-roboto rounded-lg text-sm px-5 py-2.5 text-center dark:bg-dorado"
                                  value="ACEPTAR"
                              />
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="pl-5 pb-3 text-left text-xl font-roboto text-gray-900 dark:text-white">
                            Selecciona tus <span className="font-noto text-verde dark:text-dorado">{' '}Temáticas!!</span>
                        </h3>
                        <MultiSelect
                          className=''
                          options={options}
                          value={selected}
                          onChange={setSelected}
                          labelledBy="Temáticas"
                        />
                      </div>

                  </form>
                  <div className="">
                    {error && <div className=" text-center font-roboto bg-red-800 text-white uppercase rounded-bl-lg rounded-br-lg">Seleccione al menos UNA temática</div> }

                  </div>
                  
              </div>
          </div>
      </div>
      
    </div>
  )
}

export default ModalPerfil
