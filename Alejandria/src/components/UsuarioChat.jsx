import React from 'react'
import icon from "../public/icon.png"
import axios from 'axios'
import { useState } from 'react'



const UsuarioChat = (props) => {

  

  const handleUser = async () => {
    try {
      const url = 'http://51.255.50.207:5000/new_chat'
      const res = await axios(url,{
        headers: {
          'Content-Type': 'application/json',
          'userOrigin': JSON.parse(localStorage.getItem('nick')),
          'userDest': props.nombreUser
        }
      })

      console.log(res.data)

      const urlMensaje = "http://51.255.50.207:5000/private/".concat(res.data)
      console.log(urlMensaje)
      const resMensaje = await axios(urlMensaje, {
        headers: {
          'Content-Type': 'application/json',
        }
      })

      const result = Object.entries(resMensaje.data).map(([id, values]) => ({ id, ...values }));
      const reverse = result.map(item => item).reverse();
      console.log(reverse)
      props.setMensajes(reverse)

      props.setPinchado(true)
      props.setUsuario(props.nombreUser)
      

    } catch(error) {
      console.log(error)
    }
  }



  return (
    
    <button onClick={handleUser} className="bg-gray-200 dark:bg-gray-700 w-full rounded-xl p-4 mb-4 hover:bg-gray-300">
      <div className='w-full flex p-2 items-center'>
          <img src={icon} className='rounded-full w-12 mr-4' />
          <div className="w-full overflow-hidden text-center">  
            <p className="font-noto text-verde dark:text-dorado text-xl">{"@".concat(props.nombreUser)}</p>
          </div>
      </div>
    </button>
      
  )
}

export default UsuarioChat