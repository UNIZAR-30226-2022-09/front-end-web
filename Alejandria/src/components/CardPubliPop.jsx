import {useEffect, useState} from 'react'
import ModalPubli from "./ModalPubli"


function CardPubliPop({cartelera}) {
  const [modal, setModal] = useState(false)

  const handleModal = () => {
    setModal(true)
  }

  return (
    <div className= " flex-shrink-0 overflow-hidden rounded-xl border-2 border-verde dark:border-dorado h-[25vh] w-40">
      <button type="button" onClick={handleModal}>
        <img    className="object-fill h-fill w-auto "
              src={cartelera.portada} 
        />
      </button>
      {modal && <ModalPubli cartelera={cartelera} setModal={setModal} tipo={cartelera.tipo}/>}
  </div> 
      
    

  )
}

export default CardPubliPop
