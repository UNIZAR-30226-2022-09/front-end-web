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

const customStylesDarkRecom = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    height: '90%',
    bottom: 'auto',
    backgroundColor:'#111827',
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
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
  },
};


Modal.setAppElement('#root');


const PublicarPage = () => {

  //----------Necesario para el futuro para recomendar--------------------------
  // <div>{location.state.id} {location.state.name}</div>
    const location = useLocation();
    console.log(location)

    const [vacio,setVacio] = useState(false)

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

    useEffect(() => {
      if(location.state == null){
        setVacio(true)
        return
      }
      if(location.state.tipo == true){//Es un artiulo
        setModalRecom(true)
      } else { //recom
        setModalRecom(true)
      }
    },[]);


    return (
      <div className="h-screen bg-bck-img dark:bg-bck-dark dark:bg-cover bg-cover">
        <div className='md:w-2/3 h-full mx-auto container grid'>
          <form className='p-2 md:w-2/3 bg-slate-50 dark:bg-gray-900 rounded-lg place-self-center grid text-center'>
              <h1 className='font-noto text-verde dark:text-blak dark:text-dorado uppercase text-4xl mt-2 mb-2'>Publicaciones</h1>
              <div className='grid m-2 p-3'>
                <button 
                  className='text-white dark:text-black dark:hover:bg-doradoClaro dark:bg-dorado dark:border-white font-roboto bg-verde rounded-3xl hover:bg-green-600 mx-2 border-2 border-dorado'
                  onClick = {handleSubmitArticulo}
                  type='button'
                  
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
            <Modal isOpen={modalRecom} style={customStylesDarkRecom}>
              <ModalRecom modalRecom={modalRecom} setModalRecom={setModalRecom} nombre={vacio ? '' : location.state.titulo} escritor={vacio ? '' : location.state.autor} enlace={vacio ? '' : location.state.link}/>
            </Modal>
          ): 
            <Modal isOpen={modalRecom} style={customStylesRecom}>
            <ModalRecom modalRecom={modalRecom} setModalRecom={setModalRecom} nombre={location.state == null ? '' : location.state.titulo} escritor={location.state == null ? '' : (location.state.tipo == true ? location.state.usuario : location.state.autor) } enlace={location.state == null ? '' : location.state.link}/>
            </Modal>
          }
          
        </div>
        
      </div>
    )
}

export default PublicarPage
