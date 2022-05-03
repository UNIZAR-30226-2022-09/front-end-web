
import CardPubli from "./CardPubli"
import CardRecomend from "./CardRecomend"
import {useEffect, useState} from 'react'

function Publicaciones({publiYRecomends}) {

  function myFunct(publiORecomend, i){
    if(publiORecomend.tipo === 1){
      return   <CardPubli 
                  id={publiORecomend.id}
                  fotoPerfil={publiORecomend.fotoPerfil}
                  nick={publiORecomend.nick}
                  portada={publiORecomend.portada}
                  comentario={publiORecomend.comentario}
                  nLikes={publiORecomend.nLikes}
                  nComents={publiORecomend.nComents}
                  nGuardados={publiORecomend.nGuardados}
                /> 
    }else{
      return <CardRecomend
                id={publiORecomend.id}
                fotoPerfil={publiORecomend.fotoPerfil}
                nick={publiORecomend.nick}
                titArticulo={publiORecomend.titArticulo}
                autorArticulo={publiORecomend.autorArticulo}
                comentario={publiORecomend.comentario}
                nLikes={publiORecomend.nLikes}
                nComents={publiORecomend.nComents}
                nGuardados={publiORecomend.nGuardados}
              /> 
    }
  }

  return (
    <div className=" w-3/6 border-l-2 border-r-2">
      <div className="h-screen overflow-y-scroll scrollbar-hide">
        <div className="ml-3 mr-2 mt-3 items-center justify-center">
          {publiYRecomends.map(myFunct)}             
        </div>
      </div>
    </div>
  )
}

export default Publicaciones
