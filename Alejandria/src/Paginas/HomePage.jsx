
import Publicaciones from "../components/Publicaciones"
import Explorar from "../components/Explorar"
import useDarkmode from "../hook/useDarkmode";

import CardPubli from "../components/CardPubli"
import CardRecomend from "../components/CardRecomend"

import {useEffect, useState} from 'react'


function HomePage() {
  const [colorTheme, setTheme] = useDarkmode();
  const [publiYRecomends, setPubliYRecomends] = useState([])

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
  
  const obtenerPubliYRecomendApi = async (token) => {
    try {
      const urlRecomend = 'http://51.255.50.207:5000/Home'
      const resRecomend = await fetch(urlRecomend, {
        headers : {
          'Content-Type' : 'application/json',
          'token' : token
        }
      })
      const resultPubli = await resRecomend.json()
      const result = Object.entries(resultPubli).map(([id, values]) => ({ id, ...values }));

      console.log('obtenerPubliYRecomendApi:',result);
      setPubliYRecomends(result);
      console.log('setPubliYRecomends:', publiYRecomends);

    } catch (error) {
      console.log(error);
    }
  }

  
  
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token'))
    obtenerPubliYRecomendApi(token)
  }, []);


  return (
    
    <div className="flex">
      <div className=" w-3/6 border-l-2 border-r-2">
        <div className="h-screen overflow-y-scroll scrollbar-hide">
          <div className="ml-3 mr-2 mt-3 items-center justify-center">
            {publiYRecomends.map(myFunct)}             
          </div>
        </div>
      </div>
      <Explorar />
    </div>
    
  )
}

export default HomePage
