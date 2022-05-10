import React from 'react'
import { useState } from 'react'
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
import Alerta from '../components/Alerta'
import axios, { Axios } from 'axios'







const divStyle = {
    width: 50,
    height: 50,
    background: '#e2e8f0',   
    borderRadius: '50%',
    //WebkitTransition: 'all', // nota la 'W' mayúscula aquí 
    //msTransition: 'all' // 'ms' es el único prefijo de proveedor de navegador en minúscula
}

const divStyleMarcado = {
    width: 50,
    height: 50,
    background: '#447258',   
    borderRadius: '50%',
    //WebkitTransition: 'all', // nota la 'W' mayúscula aquí 
    //msTransition: 'all' // 'ms' es el único prefijo de proveedor de navegador en minúscula
}

let Items = [
    {
        nombre: 'Biología',
        marcado: false,
        nEnvio: 'Biologia'
    },
    {
        nombre: 'C. Sociales',
        marcado: false,
        nEnvio: 'C.Sociales'
    },
    {
        nombre: 'Economía',
        marcado: false,
        nEnvio: 'Economia'
    },
    {
        nombre: 'Electrónica',
        marcado: false,
        nEnvio: 'Electronica'
    },
    {
        nombre: 'Filología',
        marcado: false,
        nEnvio: 'Filologia'
    },
    {
        nombre: 'Filosofía',
        marcado: false,
        nEnvio: 'Filosofia'
    },
    {
        nombre: 'Física',
        marcado: false,
        nEnvio: 'Fisica'
    },
    {
        nombre: 'Geología',
        marcado: false,
        nEnvio: 'Geologia'
    },
    {
        nombre: 'Historia',
        marcado: false,
        nEnvio: 'Historia'
    },
    {
        nombre: 'Informática',
        marcado: false,
        nEnvio: 'Informatica'
    },
    {
        nombre: 'Ingeniería',
        marcado: false,
        nEnvio: 'Ingenieria'
    },
    {
        nombre: 'Matemáticas',
        marcado: false,
        nEnvio: 'Matematicas'
    },
    {
        nombre: 'Mecánica',
        marcado: false,
        nEnvio: 'Mecanica'
    },
    {
        nombre: 'Medicina',
        marcado: false,
        nEnvio: 'Medicina'
    },
    {
        nombre: 'Química',
        marcado: false,
        nEnvio: 'Quimica'
    },
]




    



export const ModalArticulo = ({modalArticulo,setModalArticulo}) => {



    const [descripcion,setDescripcion] = useState('')
    const [file,setFile] = useState(null)
    const [error,setError] = useState(false) //Para mostrar mensaje de error si no hay pdf

    
    const [biologia,setBiologia] = useState(false)
    const [sociales,setSociales] = useState(false)
    const [economia,setEconomia] = useState(false)
    const [electronica,setElectronica] = useState(false)
    const [filologia,setFilologia] = useState(false)
    const [filosofia,setFilosofia] = useState(false)
    const [fisica,setFisica] = useState(false)
    const [geologia,setGeologia] = useState(false)
    const [historia,setHistoria] = useState(false)
    const [informatica,setInformatica] = useState(false)
    const [ingenieria,setIngenieria] = useState(false)
    const [matematicas,setMatematicas] = useState(false)
    const [mecanica,setMecanica] = useState(false)
    const [medicina,setMedicina] = useState(false)
    const [quimica,setQuimica] = useState(false)


    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            console.log(Items)

            if(!file){
                setError(true)
                return
            }       

            setError(false)

            const botones = Items.filter( item => item.marcado === true)
            const tematicas = botones.map(function(item) {
                return item.nEnvio;
            })
            console.log(tematicas)

            const url = 'http://51.255.50.207:5000/editarPerfil'

            const respuesta = await axios.post(url,{
                descripcion,tematicas
            })

            console.log(respuesta)
            
                //Hacer peticion al back

            setDescripcion('')
            setFile(null)

        } catch (error) {
            console.log(error)
        }
    }



    const handleChangeModal = () => {
        setModalArticulo(!modalArticulo)
    }

    

    return (
        <div>
        
            <div className='flex justify-end'>
                    <button
                        onClick={handleChangeModal}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
            </div>
            <div className='md:w-4/5 mx-auto'>
                
                <h1 className='text-2xl text-verde uppercase font-bold font-roboto text-center'>Nuevo post</h1>

                <div className='mt-6'>
                    <input
                        type='file'
                        accept='application/pdf'
                        onChange={ (e) => setFile(e.target.files[0])}
                    >
                    </input>
                </div>

                {error ? (
                    <Alerta>{'Para publicar es necesario subir un archivo'}</Alerta>
                ): null }
                
                <label className='m-2 font-roboto mt-4 text-verde font-bold text-xl block'>
                    Descripción
                </label>
                <input className="font-roboto rounded-lg mt-2 w-full border-1 border-verde text-lg dark:border-dorado dark:bg-gray-500 dark:text-white block"
                        type='text'
                        placeholder="Añada una breve descripción del artículo"
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                />

                <div className='text-verde font-roboto text-center mt-2 font-bold text-lg'>Temática(s) de la recomendación</div>


                <div className='grid grid-cols-5 gap-10 w-full mt-4 justify-items-center'>
                    
                    
                    { biologia ? (
                        <div className='text-center'>
                            <button style={divStyleMarcado}
                                onClick={() => {
                                    setBiologia(false)
                                    Items[0].marcado = false;
                                    console.log(Items)

                                }}
                            >
                                <FontAwesomeIcon icon={faDna} size='lg' style={{ color: 'white' }} />
                            </button>
                            <p className='text-sm text-black font-roboto'>Biología</p>
                        </div>
                    ): (
                        <div className='text-center'>
                            <button style={divStyle}
                                onClick={() => {
                                    setBiologia(true)
                                    Items[0].marcado = true;
                                    console.log(Items)

                                }}
                            >
                                <FontAwesomeIcon icon={faDna} size='lg' style={{ color: '#447258' }}/>
                            </button>
                            <p className='text-sm text-black font-roboto'>Biología</p>
                        </div>
                    )}
                    
                    
                    { sociales ? (
                        <div className='text-center'>
                            <button style={divStyleMarcado}
                                onClick={() => {
                                    setSociales(false)
                                    Items[1].marcado = false;
                                    console.log(Items)
                                }}
                            >
                                <FontAwesomeIcon icon={faRuler} size='lg' style={{ color: 'white' }} />
                            </button>
                            <p className='text-sm text-black font-roboto'>C.Sociales</p>
                        </div>
                    ): (
                        <div className='text-center'>
                            <button style={divStyle}
                                onClick={() => {
                                    setSociales(true)
                                    Items[1].marcado = true;
                                    console.log(Items)
                                }}
                            >
                                <FontAwesomeIcon icon={faRuler} size='lg' style={{ color: '#447258' }}/>
                            </button>
                            <p className='text-sm text-black font-roboto'>C.Sociales</p>
                        </div>
                    )}

                    { economia ? (
                        <div className='text-center'>
                            <button style={divStyleMarcado}
                                onClick={() => {
                                    setEconomia(false)
                                    Items[2].marcado = false;
                                }}
                            >
                                <FontAwesomeIcon icon={faCoins} size='lg' style={{ color: 'white' }} />
                            </button>
                            <p className='text-sm text-black font-roboto'>Economia</p>
                        </div>
                    ): (
                        <div className='text-center'>
                            <button style={divStyle}
                                onClick={() => {
                                    setEconomia(true)
                                    Items[2].marcado = true;
                                }}
                            >
                                <FontAwesomeIcon icon={faCoins} size='lg' style={{ color: '#447258' }}/>
                            </button>
                            <p className='text-sm text-black font-roboto'>Economia</p>
                        </div>
                    )}



                    { electronica ? (
                        <div className='text-center'>
                            <button style={divStyleMarcado}
                                onClick={() => {
                                    setElectronica(false)
                                    Items[3].marcado = false;
                                }}
                            >
                                <FontAwesomeIcon icon={faLightbulb} size='lg' style={{ color: 'white' }} />
                            </button>
                            <p className='text-sm text-black font-roboto'>Electrónica</p>
                        </div>
                    ): (
                        <div className='text-center'>
                            <button style={divStyle}
                                onClick={() => {
                                    setElectronica(true)
                                    Items[3].marcado = true;
                                }}
                            >
                                <FontAwesomeIcon icon={faLightbulb} size='lg' style={{ color: '#447258' }}/>
                            </button>
                            <p className='text-sm text-black font-roboto'>Electrónica</p>
                        </div>
                    )}

                    { filologia ? (
                        <div className='text-center'>
                            <button style={divStyleMarcado}
                                onClick={() => {
                                    setFilologia(false)
                                    Items[4].marcado = false;
                                }}
                            >
                                <FontAwesomeIcon icon={faLanguage} size='lg' style={{ color: 'white' }} />
                            </button>
                            <p className='text-sm text-black font-roboto'>Filología</p>
                        </div>
                    ): (
                        <div className='text-center'>
                            <button style={divStyle}
                                onClick={() => {
                                    setFilologia(true)
                                    Items[4].marcado = true;
                                }}
                            >
                                <FontAwesomeIcon icon={faLanguage} size='lg' style={{ color: '#447258' }}/>
                            </button>
                            <p className='text-sm text-black font-roboto'>Filología</p>
                        </div>
                    )}

                    {filosofia ? (
                        <div className='text-center'>
                            <button style={divStyleMarcado}
                                onClick={() => {
                                    setFilosofia(false)
                                    Items[5].marcado = false;
                                }}
                            >
                                <FontAwesomeIcon icon={faBook} size='lg' style={{ color: 'white' }} />
                            </button>
                            <p className='text-sm text-black font-roboto'>Filosofía</p>
                        </div>
                        ): (
                            <div className='text-center'>
                                <button style={divStyle}
                                    onClick={() => {
                                        setFilosofia(true)
                                        Items[5].marcado = true;
                                    }}
                                >
                                    <FontAwesomeIcon icon={faBook} size='lg' style={{ color: '#447258' }}/>
                                </button>
                                <p className='text-sm text-black font-roboto'>Filosofía</p>
                            </div>
                    )}

                    {fisica ? (
                        <div className='text-center'>
                            <button style={divStyleMarcado}
                                onClick={() => {
                                    setFisica(false)
                                    Items[6].marcado = false;
                                }}
                            >
                                <FontAwesomeIcon icon={faRuler} size='lg' style={{ color: 'white' }} />
                            </button>
                            <p className='text-sm text-black font-roboto'>Física</p>
                        </div>
                        ): (
                            <div className='text-center'>
                                <button style={divStyle}
                                    onClick={() => {
                                        setFisica(true)
                                        Items[6].marcado = true;
                                    }}
                                >
                                    <FontAwesomeIcon icon={faRuler} size='lg' style={{ color: '#447258' }}/>
                                </button>
                                <p className='text-sm text-black font-roboto'>Física</p>
                            </div>
                    )}


                    {geologia ? (
                        <div className='text-center'>
                            <button style={divStyleMarcado}
                                onClick={() => {
                                    setGeologia(false)
                                    Items[7].marcado = false;
                                }}
                            >
                                <FontAwesomeIcon icon={faRuler} size='lg' style={{ color: 'white' }} />
                            </button>
                            <p className='text-sm text-black font-roboto'>Geología</p>
                        </div>
                        ): (
                            <div className='text-center'>
                                <button style={divStyle}
                                    onClick={() => {
                                        setGeologia(true)
                                        Items[7].marcado = true;
                                    }}
                                >
                                    <FontAwesomeIcon icon={faRuler} size='lg' style={{ color: '#447258' }}/>
                                </button>
                                <p className='text-sm text-black font-roboto'>Geología</p>
                            </div>
                    )}

                    {historia ? (
                        <div className='text-center'>
                            <button style={divStyleMarcado}
                                onClick={() => {
                                    setHistoria(false)
                                    Items[8].marcado = false;
                                }}
                            >
                                <FontAwesomeIcon icon={faLandmark} size='lg' style={{ color: 'white' }} />
                            </button>
                            <p className='text-sm text-black font-roboto'>Historia</p>
                        </div>
                        ): (
                            <div className='text-center'>
                                <button style={divStyle}
                                    onClick={() => {
                                        setHistoria(true)
                                        Items[8].marcado = true;
                                    }}
                                >
                                    <FontAwesomeIcon icon={faLandmark} size='lg' style={{ color: '#447258' }}/>
                                </button>
                                <p className='text-sm text-black font-roboto'>Historia</p>
                            </div>
                    )}

                    {informatica ? (
                        <div className='text-center'>
                            <button style={divStyleMarcado}
                                onClick={() => {
                                    setInformatica(false)
                                    Items[9].marcado = false;
                                }}
                            >
                                <FontAwesomeIcon icon={faMicrochip} size='lg' style={{ color: 'white' }} />
                            </button>
                            <p className='text-sm text-black font-roboto'>Informática</p>
                        </div>
                        ): (
                            <div className='text-center'>
                                <button style={divStyle}
                                    onClick={() => {
                                        setInformatica(true)
                                        Items[9].marcado = true;
                                    }}
                                >
                                    <FontAwesomeIcon icon={faMicrochip} size='lg' style={{ color: '#447258' }}/>
                                </button>
                                <p className='text-sm text-black font-roboto'>Informática</p>
                            </div>
                    )}  

                    {ingenieria ? (
                        <div className='text-center'>
                            <button style={divStyleMarcado}
                                onClick={() => {
                                    setIngenieria(false)
                                    Items[10].marcado = false;
                                }}
                            >
                                <FontAwesomeIcon icon={faBrain} size='lg' style={{ color: 'white' }} />
                            </button>
                            <p className='text-sm text-black font-roboto'>Ingeniería</p>
                        </div>
                        ): (
                            <div className='text-center'>
                                <button style={divStyle}
                                    onClick={() => {
                                        setIngenieria(true)
                                        Items[10].marcado = true;
                                    }}
                                >
                                    <FontAwesomeIcon icon={faBrain} size='lg' style={{ color: '#447258' }}/>
                                </button>
                                <p className='text-sm text-black font-roboto'>Ingeniería</p>
                            </div>
                    )}

                    {matematicas ? (
                        <div className='text-center'>
                            <button style={divStyleMarcado}
                                onClick={() => {
                                    setMatematicas(false)
                                    Items[11].marcado = false;
                                }}
                            >
                                <FontAwesomeIcon icon={faRuler} size='lg' style={{ color: 'white' }} />
                            </button>
                            <p className='text-sm text-black font-roboto'>Matemáticas</p>
                        </div>
                        ): (
                            <div className='text-center'>
                                <button style={divStyle}
                                    onClick={() => {
                                        setMatematicas(true)
                                        Items[11].marcado = true;
                                    }}
                                >
                                    <FontAwesomeIcon icon={faRuler} size='lg' style={{ color: '#447258' }}/>
                                </button>
                                <p className='text-sm text-black font-roboto'>Matemáticas</p>
                            </div>
                    )}


                    {mecanica ? (
                        <div className='text-center'>
                            <button style={divStyleMarcado}
                                onClick={() => {
                                    setMecanica(false)
                                    Items[12].marcado = false;
                                }}
                            >
                                <FontAwesomeIcon icon={faRuler} size='lg' style={{ color: 'white' }} />
                            </button>
                            <p className='text-sm text-black font-roboto'>Mecánica</p>
                        </div>
                        ): (
                            <div className='text-center'>
                                <button style={divStyle}
                                    onClick={() => {
                                        setMecanica(true)
                                        Items[12].marcado = true;
                                    }}
                                >
                                    <FontAwesomeIcon icon={faRuler} size='lg' style={{ color: '#447258' }}/>
                                </button>
                                <p className='text-sm text-black font-roboto'>Mecánica</p>
                            </div>
                    )}

                    {medicina ? (
                        <div className='text-center'>
                            <button style={divStyleMarcado}
                                onClick={() => {
                                    setMedicina(false)
                                    Items[13].marcado = false;
                                }}
                            >
                                <FontAwesomeIcon icon={faStethoscope} size='lg' style={{ color: 'white' }} />
                            </button>
                            <p className='text-sm text-black font-roboto'>Medicina</p>
                        </div>
                        ): (
                            <div className='text-center'>
                                <button style={divStyle}
                                    onClick={() => {
                                        setMedicina(true)
                                        Items[13].marcado = true;
                                    }}
                                >
                                    <FontAwesomeIcon icon={faStethoscope} size='lg' style={{ color: '#447258' }}/>
                                </button>
                                <p className='text-sm text-black font-roboto'>Medicina</p>
                            </div>
                    )}


                    {quimica ? (
                        <div className='text-center'>
                            <button style={divStyleMarcado}
                                onClick={() => {
                                    setQuimica(false)
                                    Items[14].marcado = false;
                                }}
                            >
                                <FontAwesomeIcon icon={faAtom} size='lg' style={{ color: 'white' }} />
                            </button>
                            <p className='text-sm text-black font-roboto'>Química</p>
                        </div>
                        ): (
                            <div className='text-center'>
                                <button style={divStyle}
                                    onClick={() => {
                                        setQuimica(true)
                                        Items[14].marcado = true;
                                    }}
                                >
                                    <FontAwesomeIcon icon={faAtom} size='lg' style={{ color: '#447258' }}/>
                                </button>
                                <p className='text-sm text-black font-roboto'>Química</p>
                            </div>
                    )}
                    
                </div>

                

                <div className='mt-3 text-center'>
                    <input 
                            type="submit"
                            value="Publicar"
                            onClick={handleSubmit}
                            className='mt-5 w-full p-3 text-white bg-verde mx-auto
                            hover:bg-green-800 font-roboto font-bold text-xl rounded-2xl uppercase'
                    />
                </div>
                
            </div>

        </div>   
    )
}


export default ModalArticulo;
