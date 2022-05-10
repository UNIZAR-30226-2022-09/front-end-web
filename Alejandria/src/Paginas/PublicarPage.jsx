
import React from 'react'
import { useState, useEffect } from 'react'
import ModalArticulo from '../components/ModalArticulo'
import ModalRecom from '../components/ModalRecom'
import Modal from 'react-modal'



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

Modal.setAppElement('#root');


const PublicarPage = () => {


    const [modalArticulo,setModalArticulo] = useState(false)
    const [modalRecom,setModalRecom] = useState(false)

    const handleSubmitArticulo = () => {
      setModalArticulo(true)
    }

    const handleSubmitRecom = () => {
      setModalRecom(true)
    }

    


    return (
      <div className="h-screen bg-bck-img bg-cover">
        <div className='md:w-2/3 h-full mx-auto container grid'>
          <form className='p-2 md:w-2/3 bg-slate-50 rounded-lg place-self-center grid text-center'>
              <h1 className='font-noto text-verde uppercase text-4xl mt-2 mb-2'>Publicaciones</h1>
              <div className='grid m-2 p-3'>
                <button 
                  className='text-white font-roboto bg-verde rounded-3xl hover:bg-green-600 mx-2 border-2 border-dorado'
                  onClick = {handleSubmitArticulo}
                  type = 'button'
                  
                >
                  <h1 className='text-2xl text-white font-noto mt-2'>Nuevo artículo </h1>
                  <p className='mt-3 text-lg mb-2'>Comparte uno de tus trabajos con nuestra comunidad de usuarios</p>
                </button>
              </div>
              <div className='grid m-2 p-3'>
                <button 
                  className='text-white font-roboto bg-verde rounded-3xl hover:bg-green-600 mx-2 border-2 border-dorado'
                  onClick={handleSubmitRecom}
                  type = 'button'
                >
                  <h1 className='text-2xl text-white font-noto mt-2'>Nueva recomendacion</h1>
                  <p className='mt-3 text-lg mb-2'>Comparte uno de tus recomendaciones con nuestra comunidad de usuarios</p>
                </button>
              </div>
          </form>

          {modalArticulo && (
            <Modal isOpen={modalArticulo} style={customStyles}>
              <ModalArticulo modalArticulo={modalArticulo} setModalArticulo={setModalArticulo}/>
            </Modal>
          )}

          {modalRecom && (
            <Modal isOpen={modalRecom} style={customStyles}>
              <ModalRecom modalRecom={modalRecom} setModalRecom={setModalRecom}/>
            </Modal>
          )}
          
        </div>
        
      </div>
    )
}

export default PublicarPage
