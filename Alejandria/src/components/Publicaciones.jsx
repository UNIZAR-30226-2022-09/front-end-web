
import CardPubli from "./CardPubli"
import CardRecomend from "./CardRecomend"
import {useEffect, useState} from 'react'

function Publicaciones({publiYRecomends}) {
  
  function myFunct(publiORecomend, i){
    if(publiORecomend.tipo === 1){
      return  <CardPubli
                //revisar key e id
                key={i}
                id={publiORecomend.id}

                pdf={publiORecomend.pdf}
                portada={publiORecomend.portada}
                foto_de_perfil={publiORecomend.foto_de_perfil}
                usuario={publiORecomend.usuario}
                descripcion={publiORecomend.descripcion}
                nlikes={publiORecomend.nlikes}
                likemio={publiORecomend.likemio}
                ncomentarios={publiORecomend.ncomentarios}
                nguardados={publiORecomend.nguardados}
                guardadomio={publiORecomend.guardadomio}
              /> 
    }else{
      return <CardRecomend
                key={i}
                id={publiORecomend.id}
                
                titulo={publiORecomend.titulo}
                autor={publiORecomend.autor}
                descripcion={publiORecomend.descripcion}
                link={publiORecomend.link}
                usuario={publiORecomend.usuario}
                foto_de_perfil={publiORecomend.foto_de_perfil}
                nlikes={publiORecomend.nlikes}
                likemio={publiORecomend.likemio}
                ncomentarios={publiORecomend.ncomentarios}
                nguardados={publiORecomend.nguardados}
                guardadomio={publiORecomend.guardadomio}
              /> 
    }
  }

  // const handleClick = () => {
  //   const url = `/myAccount/externalUser/${data.nick}`
  //   console.log(url);
  //   // navigate(url)
  // };

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
