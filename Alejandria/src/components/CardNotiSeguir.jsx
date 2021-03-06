import React from 'react'
import { useNavigate } from 'react-router-dom'



const CardNotiSeguir = (props) => {


  const navigate = useNavigate()

    return (
        <div className="bg-gray-200 px-5 py-5 mb-3 rounded-2xl border-2 border-verde dark:border-dorado dark:bg-gray-900 dark:text-white">
           
            <div className="mb-2 gap-2 items-center hover:underline ">
                
                <button
                  type="button"
                  className=" px-2 flex text-1xl gap-2 cursor-pointer transition-all items-center"
                  onClick={() => navigate('/myAccount/perfil')}
                >
                <img className="w-10 h-10 rounded-full shadow-sm" 
                 src= {`${props.fotoPerfil}`}
                 alt="" 
                /> 
                <div className="font-roboto">@{props.nickUser}</div>
                </button>
            </div>
            
            
    
            <h1 className="mt-2 text-justify font-roboto">
            <button type="button"
                      onClick={() => navigate(`/myAccount/externalUser/${props.nickOtroUser}`)}
              
              >
                <span className="text-lg cursor-pointer transition-all hover:underline font-noto">@{props.nickOtroUser}</span>
            </button> 
            {' '}ha comenzado a seguirte. 
            </h1>
    
          </div>
    )
}

export default CardNotiSeguir