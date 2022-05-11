
import React from 'react'
import { useState } from 'react'
import {useLocation} from 'react-router-dom';


const PublicarPage = () => {

    const [modalRec,setModalRec] = useState(false)
    const [modalPst,setModalPst] = useState(false)
    const location = useLocation();


    return (
      <div>{location.state.id} {location.state.name}</div>
    )
}

export default PublicarPage
