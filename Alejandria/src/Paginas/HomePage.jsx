
import Publicaciones from "../components/Publicaciones"
import Explorar from "../components/Explorar"
import useDarkmode from "../hook/useDarkmode";

import {useEffect, useState} from 'react'


function HomePage() {
  const [colorTheme, setTheme] = useDarkmode();
  const [publiYRecomends, setPubliYRecomends] = useState([])
  
  const obtenerPubliYRecomendApi = async () => {
    try {
      const urlPubli = 'http://localhost:4000/home'
      const resPubli = await fetch(urlPubli)
      const resultPubli = await resPubli.json()
      setPubliYRecomends(resultPubli);
    } catch (error) {
      console.log(error);
    }
  }

  
  
  useEffect(() => {
    // obtenerPubliYRecomendApi()
  }, []);


  return (
    
    <div className="flex">
      <Publicaciones publiYRecomends={publiYRecomends} />
      <Explorar />
    </div>
    
  )
}

export default HomePage
