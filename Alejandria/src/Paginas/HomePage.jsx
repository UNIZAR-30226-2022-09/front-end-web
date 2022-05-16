
import Explorar from "../components/Explorar"
import useDarkmode from "../hook/useDarkmode";

import CardPubli from "../components/CardPubli"
import CardRecomend from "../components/CardRecomend"

import {useEffect, useState} from 'react'
import {Link, useLocation, useNavigate} from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser} from '@fortawesome/free-solid-svg-icons'



function HomePage() {
  const navigate = useNavigate()

  const [colorTheme, setTheme] = useDarkmode();
  const [publiYRecomends, setPubliYRecomends] = useState([])
  const [offset, setOffset] = useState(0)
  const [longResultado, setLongResultado] = useState(null)


  
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
  
  const obtenerPubliYRecomendApi = async (token, ofs) => {
    console.log('offset llamada api: ',ofs);

    try {
      const urlRecomend = 'http://51.255.50.207:5000/HomePaginado'
      const resRecomend = await fetch(urlRecomend, {
        headers : {
          'Content-Type' : 'application/json',
          'offset' : ofs,
          'limit' : 10,
          'token' : token

        }
      })
      const resultPubli = await resRecomend.json()
      // console.log('resultPubli:', resultPubli);
      
      if(resultPubli.fin == undefined){
        const result = Object.entries(resultPubli).map(([id, values]) => ({ id, ...values }));
        const reverse = result.map(item => item).reverse();

        // console.log('reverse:',reverse);
        setPubliYRecomends(prevPublis =>  prevPublis.concat(reverse));
        const longitud = reverse.length
        setTimeout(()=> {
          setLongResultado(longitud)
          // console.log('longResultado', longResultado);
        },400)
      }else{
        setLongResultado(0)

      }
      
      
    } catch (error) {
      console.log(error);
    }
  }

  const handleClick = () => {
    const token = JSON.parse(localStorage.getItem('token'))
    let prueba = offset
    prueba = prueba + 1
    console.log('prueba:', prueba);
    setOffset(prueba)
    console.log('offset: ',offset);
    obtenerPubliYRecomendApi(token, prueba)
  };
  
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token'))
    if(token == null){
      navigate('/')

    }
    console.log('useEffect');
    obtenerPubliYRecomendApi(token, offset)
  }, []);


  return (
    
    <div className="flex">
      <div className=" w-3/6 border-l-2 border-r-2 dark:border-dorado">
        <div className="h-screen overflow-y-scroll scrollbar-hide">
          <div className="ml-2 mr-2 mt-3 items-center justify-center">
            {publiYRecomends.length === 0 ? 
              <div className="text-gray-500 pt-5 text-center">
                <FontAwesomeIcon className=" w-20 h-20 " icon={faUser} />
                <div className="italic font-roboto text-3xl pt-2">
                  Todavía no sigues a ningún usuario
                </div>
              </div>
            : publiYRecomends.map(myFunct)}
            
            { longResultado >  9 
            ? 
              
              <div className="flex flex-col items-center justify-center pb-4">
                <button type="button" onClick={handleClick}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer text-verde h-8 w-8 hover:h-10 hover:w-10 dark:text-dorado" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
              </div>
              
            :
              <div></div>
            }

          </div>
        </div>
      </div>
      <Explorar />
    </div>
    
  )
}

export default HomePage
