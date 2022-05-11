import CardPubliPop from "./CardPubliPop"
import ListarCardPopRecom from "./ListarCardPopRecom"
import {useEffect, useState} from 'react'


function Explorar() {
  const [explorar, setExplorar] = useState([])

  const obtenerExplorar = async () => {
    try {
      const urlPubli = 'http://localhost:4000/novedades'
      const resPubli = await fetch(urlPubli)
      const resultPubli = await resPubli.json()
      setExplorar(resultPubli);
    } catch (error) {
      console.log(error);
    }
  }
  
  function myFunct(cartelera, i){
    if(i === 1){
      return <div className="carousel-item active relative float-left w-full">
              <img
                src={cartelera.portada}
                className="block h-[28vh]"
              />
            </div>  
    }else{
      return <div className="carousel-item relative float-left w-full h-fit">
              <img
                src={cartelera.portada}
                className="block h-[28vh]"
              />
            </div>
    }
     
  }

  useEffect(() => {
    // obtenerExplorar()
  }, []);

  return (
    <div className="w-3/6 ml-2 mr-2">
      <h1 className="text-black text-center font-roboto text-xl">Amplía tu<span
          className="font-roboto text-verde"> {''}conocimiento</span></h1>
      
      <div className="flex justify-between px-10">
        <form className="flex">
          <input className="font-roboto y-0p rounded-l-lg pl-2 border-t border-b border-l border-verde bg-white" placeholder="Filtrar por palabra"/>
          <button className="font-roboto rounded-r-lg bg-verde p-1 text-white uppercase">Buscar</button>
        </form>
        <div className="flex">
          <input className="font-roboto y-0p rounded-l-lg pl-2 border-t border-b border-l border-verde bg-white" 
                type='text'
                placeholder="Buscar Usuario"/>

          <button className="font-roboto rounded-r-lg bg-verde p-1 text-white uppercase">Buscar</button>
          
        </div>
        
      </div>
      
      {/* FILTROS */}
      <div className="pt-1 flex overflow-x-auto scrollbar-hide gap-1">
        <button className="px-1 border-solid border-b-2 border-verde font-roboto focus:bg-verde focus:text-white">
          Preferencias
        </button>
        <button className="px-1 border-solid border-b-2 border-verde font-roboto focus:bg-verde focus:text-white">
          Biología
        </button>
        <button className="px-1 border-solid border-b-2 border-verde font-roboto focus:bg-verde focus:text-white">
          C.Sociales
        </button>
        <button className="px-1 border-solid border-b-2 border-verde font-roboto focus:bg-verde focus:text-white">
          Economía
        </button>
        <button className="px-1 border-solid border-b-2 border-verde font-roboto focus:bg-verde focus:text-white">
          Electrónica
        </button>
        <button className="px-1 border-solid border-b-2 border-verde font-roboto focus:bg-verde focus:text-white">
          Filología
        </button>
        <button className="px-1 border-solid border-b-2 border-verde font-roboto focus:bg-verde focus:text-white">
          Física
        </button>
        <button className="px-1 border-solid border-b-2 border-verde font-roboto focus:bg-verde focus:text-white">
          Filosofía
        </button>
        <button className="px-1 border-solid border-b-2 border-verde font-roboto focus:bg-verde focus:text-white">
          Geología
        </button>
        <button className="px-1 border-solid border-b-2 border-verde font-roboto focus:bg-verde focus:text-white">
          Historia
        </button>
        <button className="px-1 border-solid border-b-2 border-verde font-roboto focus:bg-verde focus:text-white">
          Informática
        </button>
        <button className="px-1 border-solid border-b-2 border-verde font-roboto focus:bg-verde focus:text-white">
          Ingeniería
        </button>
        <button className="px-1 border-solid border-b-2 border-verde font-roboto focus:bg-verde focus:text-white">
          Matemáticas
        </button>
        <button className="px-1 border-solid border-b-2 border-verde font-roboto focus:bg-verde focus:text-white">
          Mecánica
        </button>
        <button className="px-1 border-solid border-b-2 border-verde font-roboto focus:bg-verde focus:text-white">
          Medicina
        </button>
        <button className="px-1 border-solid border-b-2 border-verde font-roboto focus:bg-verde focus:text-white">
          Química
        </button>
      </div>

      {/* CARROUSEL */}
      <div className="">
        <h1 className="mt-2 mb-1 text-lg text-left font-noto">Explora <span className="uppercase text-verde">novedades</span></h1>
        <div id="carouselExampleControls" className="carousel slide relative " data-bs-ride="carousel">
          <div className="w-6/12 h-[28vh] mx-auto">
            <div className="carousel-inner relative w-full overflow-hidden">
              {explorar.map(myFunct)}  
            </div>
            <button
              className="carousel-control-prev absolute top-0 bottom-0 items-center justify-center p-0 text-center hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span className="text-verde font-roboto text-7xl carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"> {'<'} </span>
            </button>
            <button
              className="carousel-control-next absolute top-0 bottom-0 items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span className="text-verde font-roboto text-7xl carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"> {'>'} </span>

            </button>
          </div>
          
        </div>
      </div>

      <div className="">
        <h1 className="mt-2 mb-1 text-lg text-left font-noto">Explora <span className="uppercase text-verde">Populares - Artículos</span></h1>
        <div className="flex overflow-x-auto space-x-4">
          {explorar.map( cartelera => (
            <CardPubliPop 
              key={cartelera.id}
              portada={cartelera.portada}
            />
            ))} 
          
        </div>
      </div>
      <h1 className="mt-1 mb-1 text-lg text-left font-noto">Explora <span className="uppercase text-verde">Populares - Recomendaciones</span></h1>
      
      <div className="h-[24vh] overflow-y-scroll scrollbar-hide">
        <div className="items-center justify-center">
          <ListarCardPopRecom />
        </div>
      </div>
      


    </div>
  )
}

export default Explorar
