import CardPubliPop from "./CardPubliPop"
import ListarCardPopRecom from "./ListarCardPopRecom"
import {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'


function Explorar() {
  const [explorar, setExplorar] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const navigate = useNavigate()
  
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

  const obtenerUsers = async (searchWord) => {
    const token = JSON.parse(localStorage.getItem('token'))
    try {
      const urlRecomend = 'http://51.255.50.207:5000/buscarUsuarios'
      const resRecomend = await fetch(urlRecomend, {
        headers : {
          'Content-Type' : 'application/json',
          'nick' : searchWord,
          'token' : token
        }
      })
      const resultRecomend = await resRecomend.json()
      // console.log('resultRecomend:', resultRecomend);
      // let data = { boss: { name: "Peter", phone: "123" }, minion: { name: "Bob", phone: "456" }, slave: { name: "Pat", phone: "789" } },
      
      const result = Object.entries(resultRecomend).map(([nick, values]) => ({ nick, ...values }));

      console.log('resultado Users', result);
      setFilteredData(result);
    } catch (error) {
      console.log(error);
    }
  }

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    console.log('searchWord', searchWord);
    
    if (searchWord === "") {
      setFilteredData([]);
    } 
    else {
      obtenerUsers(searchWord)
    }
  };

  const handleClick = (e, user) => {
    console.log(user);

    const arroba = '@'
    const nick = JSON.parse(localStorage.getItem('nick'))

    if(e.target.innerHTML == arroba.concat(nick)){
      navigate('/myAccount/perfil')
    } else {
      navigate(`/myAccount/externalUser/${user}`)
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
        
        <div>
        <div className="relative flex items-center text-gray-400">
            <input className="font-roboto y-0p rounded-lg pl-9 border-t border-b border-l border-verde bg-white text-base" 
                  type='text'
                  placeholder="Buscar Usuario ..."
                  onChange={handleFilter}/>

            <div className="absolute pl-2 pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
            </div>
          
          </div>
          { filteredData.length != 0 && (
            <div className="mt-2 w-72 h-48 bg-white overflow-hidden overflow-y-auto scrollbar-hide">
              
              {filteredData.map( data => (
                    <div className="py-2 gap-2 border-b-2 items-center" key={data.nick}>
                      <button
                        type="button"
                        className=" px-2 flex text-1xl gap-2 cursor-pointer transition-all items-center"
                        onClick={(e) => handleClick(e, data.nick)}
                      >
                        <img className="w-10 h-10 rounded-full shadow-sm" 
                        src={data.foto_de_perfil}
                        /> 
                        <div className="font-roboto">@{data.nick}</div>
                      </button>
                    </div>

                  ))}

            </div>
          )}
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
          PROBANDO LA NUEVA RAMA
        </div>
      </div>
      


    </div>
  )
}

export default Explorar
