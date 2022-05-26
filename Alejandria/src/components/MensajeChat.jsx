import React from 'react'
import icon from "../public/icon.png"

const MensajeChat = (props) => {
  return (
    <div className="py-6 px-12">
      <div className={props.usuario === JSON.parse(localStorage.getItem('nick')) && "flex flex-row-reverse"}>
        <img src={icon} className="self-end rounded-full w-12 mr-4"></img>
        <div className={props.usuario === JSON.parse(localStorage.getItem('nick')) ? "bg-gray-200 p-6 w-1/2 rounded-3xl rounded-br-none shadow-lg": "bg-verde dark:bg-dorado p-6 w-1/2 rounded-3xl rounded-bl-none shadow-lg"}>
          <p className={props.usuario === JSON.parse(localStorage.getItem('nick')) ? "font-bold font-roboto text-2xl mb-2 text-verde dark:text-dorado": "font-bold font-roboto text-2xl mb-2 text-gray-200"}>{"@".concat(props.usuario)}</p>
          <p className={props.usuario === JSON.parse(localStorage.getItem('nick')) ? "font-roboto text-base mb-2 text-verde dark:text-dorado": "font-bold font-roboto text-base mb-2 text-gray-200"}>{props.mensaje}</p>
        </div> 
      </div>
    </div>
  )
}

export default MensajeChat