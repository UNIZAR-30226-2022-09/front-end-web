import React from 'react'
import {useState,useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBrain, faPersonDotsFromLine} from '@fortawesome/free-solid-svg-icons'
import {faDna} from '@fortawesome/free-solid-svg-icons'
import {faCoins} from '@fortawesome/free-solid-svg-icons'
import {faLightbulb} from '@fortawesome/free-solid-svg-icons'
import {faLanguage} from '@fortawesome/free-solid-svg-icons'
import {faBook} from '@fortawesome/free-solid-svg-icons'
import {faRuler} from '@fortawesome/free-solid-svg-icons'
import {faLandmark} from '@fortawesome/free-solid-svg-icons'
import {faMicrochip} from '@fortawesome/free-solid-svg-icons'
import {faStethoscope} from '@fortawesome/free-solid-svg-icons'
import {faAtom} from '@fortawesome/free-solid-svg-icons'
import Alerta from './Alerta'
import axios, { Axios } from 'axios'
import { useNavigate } from 'react-router-dom'
import useDarkmode from '../hook/useDarkmode'





const divStyle = {
  width: 50,
  height: 50,
  background: '#e2e8f0',   //gris
  borderRadius: '50%',
  //WebkitTransition: 'all', // nota la 'W' mayúscula aquí 
  //msTransition: 'all' // 'ms' es el único prefijo de proveedor de navegador en minúscula
}

const divStyleDarkUnmarked = {
    width: 50,
    height: 50,
    background: '#ffff',  //Blanco
    borderRadius: '50%',
    //WebkitTransition: 'all', // nota la 'W' mayúscula aquí 
    //msTransition: 'all' // 'ms' es el único prefijo de proveedor de navegador en minúscula
}

const divStyleDarkMarked = {
    width: 50,
    height: 50,
    background: '#d69b41',   //dorado
    borderRadius: '50%',
    //WebkitTransition: 'all', // nota la 'W' mayúscula aquí 
    //msTransition: 'all' // 'ms' es el único prefijo de proveedor de navegador en minúscula
}



const divStyleMarcado = {
  width: 50,
  height: 50,
  background: '#447258',  //verde
  borderRadius: '50%',
  //WebkitTransition: 'all', // nota la 'W' mayúscula aquí 
  //msTransition: 'all' // 'ms' es el único prefijo de proveedor de navegador en minúscula
}


const ModalArticulo = ({modalArticulo,setModalArticulo}) => {

    const [cambio,setCambio] = useState(false);

    const [temas,setTemas] = useState([
        {
            nombre: 'Biología',
            marcado: false,
            nEnvio: 'Biologia',
            id: 1,
            icon: faDna
        },
        {
            nombre: 'C.Sociales',
            marcado: false,
            nEnvio: 'C.Sociales',
            id: 2,
            icon: faRuler
        },
        {
            nombre: 'Economía',
            marcado: false,
            nEnvio: 'Economia',
            id: 3,
            icon: faCoins
        },
        {
            nombre: 'Electrónica',
            marcado: false,
            nEnvio: 'Electronica',
            id: 4,
            icon: faLightbulb
        },
        {
            nombre: 'Filología',
            marcado: false,
            nEnvio: 'Filologia',
            id: 5,
            icon: faLanguage
        },
        {
            nombre: 'Filosofía',
            marcado: false,
            nEnvio: 'Filosofia',
            id:6,
            icon: faBook
        },
        {
            nombre: 'Física',
            marcado: false,
            nEnvio: 'Fisica',
            id:7,
            icon: faRuler
        },
        {
            nombre: 'Geología',
            marcado: false,
            nEnvio: 'Geologia',
            id: 8,
            icon: faLandmark
        },
        {
            nombre: 'Historia',
            marcado: false,
            nEnvio: 'Historia',
            id:9,
            icon: faLandmark
        },
        {
            nombre: 'Informática',
            marcado: false,
            nEnvio: 'Informatica',
            id:10,
            icon: faMicrochip
        },
        {
            nombre: 'Ingeniería',
            marcado: false,
            nEnvio: 'Ingenieria',
            id: 11,
            icon: faBrain
        },
        {
            nombre: 'Matemáticas',
            marcado: false,
            nEnvio: 'Matematicas',
            id: 12,
            icon: faRuler
        },
        {
            nombre: 'Mecánica',
            marcado: false,
            nEnvio: 'Mecanica',
            id: 13,
            icon: faRuler
        },
        {
            nombre: 'Medicina',
            marcado: false,
            nEnvio: 'Medicina',
            id: 14,
            icon: faStethoscope
        },
        {
            nombre: 'Química',
            marcado: false,
            nEnvio: 'Quimica',
            id: 15,
            icon: faAtom
        },
      ])

    
    const [descripcion,setDescripcion] = useState('')
    const [error,setError] = useState(false)
    const [errorTematicas,setErrorTematicas] = useState(false)
    const [file,setFile] = useState(null)

    const navigate = useNavigate()


    const [colorTheme,setTheme] = useDarkmode();
    const oscuro = (colorTheme === 'dark') ? false : true 


    


    const handleChangeModal = () => {
      setModalArticulo(!modalArticulo)
    }


    const handleSubmit = async (e) => {
        try {
            e.preventDefault()


            const pdf = new FormData()
            pdf.append('pdf',file)
            console.log(file)


            if(!file){
                setError(true)
                setTimeout( () => {
                    setError(false)
                },1500)
                return
            }

            const url = 'http://51.255.50.207:5000/subirPost'
            const urlPdf = 'http://51.255.50.207:5000/subirPdf'

            const botones = temas.filter( item => item.marcado === true)
            const tematicas = botones.map(function(item) {
                return item.nEnvio
            })

            if(tematicas.length === 0){
                setErrorTematicas(true)
                setTimeout( () => {
                    setErrorTematicas(false)
                },1500)
                return
            }

            const obj = {
                tematicas,
                descripcion,
                tipo: '1',
            }
            const token = JSON.parse(localStorage.getItem('token'))
            const respuesta = await fetch(url,{
                method:'POST',
                body:JSON.stringify(obj),
                headers: {
                    'Content-Type': 'application/json',
                    'token': token,
                }
            })
            const resultado = await respuesta.json()



            const respuestaPdf = await axios.post(urlPdf,pdf,{
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'token': token,
                    'id': resultado.id,
                }
            })
            console.log(respuestaPdf)

            navigate('/myAccount')
            

        } catch(error){
            console.log(error)
        }

    }



    return (
        <div>
            <div className='flex justify-end'>
                  <button
                      onClick={handleChangeModal}
                      className='hover:bg-gray-100 hover:rounded-xl p-1'
                  >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                  </button>
            </div>

            <div className='md:w-4/5 mx-auto'>
              
                <h1 className='text-2xl text-verde dark:text-dorado uppercase font-bold font-roboto text-center'>Nuevo post</h1>
                <input 
                    className='mt-3 dark:text-white'
                    type='file'
                    accept='application/pdf'
                    onChange={(e) => {
                        setFile(e.target.files[0]);
                    }}
                />

                {error ? (
                    <Alerta>{'Para publicar hay que subir un archivo'}</Alerta>
                ): null}
                
                <label className='m-2 font-roboto mt-4 text-verde dark:text-dorado font-bold text-xl block'>
                    Descripcion
                </label>
                <input className="font-roboto dark:placeholder-white rounded-lg mt-2 w-full border-1 border-verde text-lg dark:border-dorado dark:bg-gray-500 dark:text-white block"
                        type='text'
                        placeholder="Introduzca una descripcion del artículo"
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                />

                {errorTematicas && <Alerta>{'Hay que seleccionar al menos una temática'}</Alerta>}  

                <div className='text-verde dark:text-dorado font-roboto text-center mt-2 font-bold text-lg'>Temática(s) de la recomendación</div>

                <div className='grid grid-cols-5 gap-10 w-full mt-3 justify-items-center'>


                    { (cambio || true) && temas.map( item => {
                        return !oscuro ? 
                            
                            <div className='text-center'>
                                <button style={item.marcado ? divStyleMarcado : divStyle }
                                    onClick={() => {
                                        item.marcado = item.marcado ? false : true
                                        setCambio(!cambio)
                                    }}
                                >
                                    <FontAwesomeIcon icon={item.icon} size='lg' style={{ color: item.marcado ? 'white' : '#447258' }} />
                                </button>
                                <p className='text-sm text-black dark:text-white font-roboto'>{item.nombre}</p>
                            </div> 
                        
                        :   <div className='text-center'>
                                <button style={item.marcado ? divStyleDarkMarked : divStyleDarkUnmarked }
                                    onClick={() => {
                                        item.marcado = item.marcado ? false : true
                                        setCambio(!cambio)
                                    }}
                                >
                                    <FontAwesomeIcon icon={item.icon} size='lg' style={{ color: item.marcado ? 'white' : '#d69b41' }} />
                                </button>
                                <p className='text-sm text-black dark:text-white font-roboto'>{item.nombre}</p>
                            </div> 
                    })
                    
                    }

                </div>
                  
                   
                  <input
                          type="submit"
                          value="Publicar"
                          onClick={handleSubmit}
                          className='mt-8 w-full p-3 text-white dark:text-black dark:bg-dorado dark:hover:bg-doradoClaro bg-verde mx-auto
                          hover:bg-green-800 font-roboto font-bold text-xl rounded-2xl uppercase'
                  />

            </div>      
        </div>
    )
}

export default ModalArticulo