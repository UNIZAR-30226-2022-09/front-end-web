import React from 'react'
import { useEffect, useState } from 'react'
import {useLocation} from 'react-router-dom';
import ModalArticulo from '../components/ModalArticulo'
import ModalRecom from '../components/ModalRecom'
import Modal from 'react-modal'
import useDarkmode from '../hook/useDarkmode'



const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const customStylesRecom = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    height: '90%',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const customStylesDark = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    backgroundColor:'#111827',
    //bottom: '50%',
    height:'70%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');


const PublicarPage = () => {

  //----------Necesario para el futuro para recomendar--------------------------
  // <div>{location.state.id} {location.state.name}</div>
    const location = useLocation();

    const [modalArticulo,setModalArticulo] = useState(false)
    const [modalRecom,setModalRecom] = useState(false)
    const [colorTheme,setTheme] = useDarkmode();
    console.log(colorTheme)
    const oscuro = (colorTheme === 'dark') ? false : true 
    console.log(oscuro)
    const handleSubmitArticulo = () => {
      setModalArticulo(true)
    }

    const handleSubmitRecom = () => {
      setModalRecom(true)
    }

<<<<<<< HEAD
    const [nombre,setNombre] = useState('')
    const [escritor,setEscritor] = useState('') 
    
=======
    useEffect(() => {
      const tipo = location.state.tipo
      if(tipo == true){//artic
        //poner modal artic a true
      } else if(tipo == false){ //recom
        //poner modal recomendacion a true
      }
    }, []);
>>>>>>> 6b00950ec8c9380c5d1c514f0bde47c6891c00f0


    return (
      <div className="h-screen bg-bck-img dark:bg-bck-dark dark:bg-cover bg-cover">
        <div className='md:w-2/3 h-full mx-auto container grid'>
          <form className='p-2 md:w-2/3 bg-slate-50 dark:bg-gray-900 rounded-lg place-self-center grid text-center'>
              <h1 className='font-noto text-verde dark:text-blak dark:text-dorado uppercase text-4xl mt-2 mb-2'>Publicaciones</h1>
              {location.state.id} {location.state.titulo} {location.state.autor} {location.state.link} {location.state.usuario} {location.state.tipo}
              <div className='grid m-2 p-3'>
                <button 
                  className='text-white dark:text-black dark:hover:bg-doradoClaro dark:bg-dorado dark:border-white font-roboto bg-verde rounded-3xl hover:bg-green-600 mx-2 border-2 border-dorado'
                  onClick = {handleSubmitArticulo}
                  type = 'button'
                  
                >
                  <h1 className='text-2xl text-white dark:text-black font-noto mt-2'>Nuevo artículo </h1>
                  <p className='mt-3 text-lg mb-2'>Comparte uno de tus trabajos con nuestra comunidad de usuarios</p>
                </button>
              </div>
              <div className='grid m-2 p-3'>
                <button 
                  className='text-white dark:text-black dark:hover:bg-doradoClaro dark:bg-dorado dark:border-white font-roboto bg-verde rounded-3xl hover:bg-green-600 mx-2 border-2 border-dorado'
                  onClick={handleSubmitRecom}
                  type = 'button'
                >
                  <h1 className='text-2xl text-white dark:text-black font-noto mt-2'>Nueva recomendacion</h1>
                  <p className='mt-3 text-lg mb-2'>Comparte uno de tus recomendaciones con nuestra comunidad de usuarios</p>
                </button>
              </div>
          </form>

          {(modalArticulo && oscuro) ? (
            <Modal isOpen={modalArticulo} style={customStylesDark}>
              <ModalArticulo modalArticulo={modalArticulo} setModalArticulo={setModalArticulo}/>
            </Modal>
          ): (
            <Modal isOpen={modalArticulo} style={customStyles}>
              <ModalArticulo modalArticulo={modalArticulo} setModalArticulo={setModalArticulo} />
            </Modal>
          )}

          {(modalRecom && oscuro) ? (
            <Modal isOpen={modalRecom} style={customStylesDark}>
              <ModalRecom modalRecom={modalRecom} setModalRecom={setModalRecom}/>
            </Modal>
          ): 
            <Modal isOpen={modalRecom} style={customStylesRecom}>
            <ModalRecom modalRecom={modalRecom} setModalRecom={setModalRecom} nombre={nombre} escritor={escritor} />
            </Modal>
          }
          
        </div>
        
      </div>
    )
}

export default PublicarPage
