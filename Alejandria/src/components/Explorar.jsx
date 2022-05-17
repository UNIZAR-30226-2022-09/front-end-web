import useDarkmode from "../hook/useDarkmode";
import CardPubliPop from "./CardPubliPop"
import {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import CardRecomend from "./CardRecomend"



function Explorar() {
  const [explorar, setExplorar] = useState([])
  const [popArticulos, setPopArticulos] = useState([])
  const [popRecomend, setPopRecomend] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const navigate = useNavigate()
  const [colorTheme, setTheme] = useDarkmode();

  const [palabraABuscar, setPalabraABuscar] = useState('')
  const [tematicaFiltro, setTematicaFiltro] = useState('pref')


  
  const obtenerExplorar = async (token, filtrado, tematicas) => {
    try {
      const urlPubli = 'http://51.255.50.207:5000/Recientes'
      const resRecomend = await fetch(urlPubli, {
        headers : {
          'Content-Type' : 'application/json',
          'filtrado' : filtrado,
          'limit' : 20,
          'tematicas' : tematicas,
          'token' : token
        }
      })
      const resultPubli = await resRecomend.json()
      console.log('resultExplorar:', resultPubli);

      if(resultPubli.fin == undefined){
        console.log('resultExplorar:', resultPubli);

        const result = Object.entries(resultPubli).map(([id, values]) => ({ id, ...values }));
        console.log('result:', result);


        setExplorar(result);
      }else{
        setExplorar([]);
      }
      
    } catch (error) {
      console.log(error);
    }
  }

  const obtenerPopularesArticulos = async (token, filtrado, tematicas) => {
    try {
      const urlPubli = 'http://51.255.50.207:5000/PopularesArticulos'
      const resRecomend = await fetch(urlPubli, {
        headers : {
          'Content-Type' : 'application/json',
          'filtrado' : filtrado,
          'limit' : 100,
          'tematicas' : tematicas,
          'token' : token
        }
      })
      const resultPubli = await resRecomend.json()
      console.log('resultPopArt:', resultPubli);

      if(resultPubli.fin == undefined){
        // console.log('resultExplorar:', resultPubli);

        const result = Object.entries(resultPubli).map(([id, values]) => ({ id, ...values }));
        // console.log('result:', result);


        setPopArticulos(result);
      }else{
        setPopArticulos([]);
        console.log('reseteando pop articulos');

      }
      
    } catch (error) {
      console.log(error);
    }
  }

  const obtenerPopularesRecomendaciones = async (token, filtrado, tematicas) => {
    try {
      const urlPubli = 'http://51.255.50.207:5000/PopularesRecomendaciones'
      
      const resRecomend = await fetch(urlPubli, {
        headers : {
          'Content-Type' : 'application/json',
          'filtrado' : filtrado,
          'limit' : 100,
          'tematicas' : tematicas,
          'token' : token
        }
      })
      const resultPubli = await resRecomend.json()
      console.log('resultPopRecomend:', resultPubli);

      if(resultPubli.fin == undefined){
        // console.log('resultExplorar:', resultPubli);

        const result = Object.entries(resultPubli).map(([id, values]) => ({ id, ...values }));
        // console.log('result:', result);


        setPopRecomend(result);
      }else{
        setPopRecomend([]);
        console.log('reseteando pop recomend');

      }
      
    } catch (error) {
      console.log(error);
    }
  }
  
  function myFunct(cartelera, i){
    if(i === 1){
      return <div className="carousel-item active relative float-left w-full" key={cartelera.id}>
              <img
                src="https://www.cleverfiles.com/howto/wp-content/uploads/2018/03/minion.jpg"
                className="block h-[28vh]"
              />
            </div>  
    }else{
      return <div className="carousel-item relative float-left w-full h-fit">
              <img
                src='http://51.255.50.207:5000/display3/60.png'
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

  const handleInputFiltrar = (event) => {
    const searchWord = event.target.value;
    console.log('searchWord', searchWord);
    
    if (searchWord === "") {
      setPalabraABuscar('');
    } 
    else {
      setPalabraABuscar(searchWord);
    }
  };

  const handleFiltrar = () => {
    const token = JSON.parse(localStorage.getItem('token'))
    console.log('handleClickFiltroTematica -> tematica: ', tematicaFiltro);
    console.log('handleClickFiltroTematica -> palabraABuscar: ', palabraABuscar);

    // obtenerExplorar(token, palabraABuscar, tematicaFiltro)
    obtenerPopularesArticulos(token, palabraABuscar, tematicaFiltro)
    obtenerPopularesRecomendaciones(token, palabraABuscar, tematicaFiltro)
    setPalabraABuscar('');
  }

  const handleClickFiltroTematica = (tematica) => {
    const token = JSON.parse(localStorage.getItem('token'))
    setTematicaFiltro(tematica)
    console.log('handleClickFiltroTematica -> tematica: ', tematica);
    console.log('handleClickFiltroTematica -> palabraABuscar: ', palabraABuscar);

    // obtenerExplorar(token, palabraABuscar, tematica)
    obtenerPopularesArticulos(token, palabraABuscar, tematica)
    obtenerPopularesRecomendaciones(token, palabraABuscar, tematica)
  };


  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token'))
    obtenerExplorar(token, palabraABuscar, tematicaFiltro)
    obtenerPopularesArticulos(token, palabraABuscar, tematicaFiltro)
    obtenerPopularesRecomendaciones(token, palabraABuscar, tematicaFiltro)
  }, []);

  return (
    <div className="w-3/6 px-2 dark:bg-gray-900 dark:text-white">
      <h1 className="text-black text-center dark:text-white font-roboto text-xl">Amplía tu<span
          className="font-roboto text-verde dark:text-dorado"> {''}conocimiento</span></h1>
      
      <div className="flex justify-between px-10">
        <form className="flex">
          <input className="font-roboto y-0p rounded-l-lg pl-2 border-t border-b border-l border-verde bg-white dark:bg-gray-400" placeholder="Filtrar por palabra" onChange={handleInputFiltrar} value={palabraABuscar}/>
          <button type='button' className="font-roboto rounded-r-lg bg-verde dark:bg-dorado p-1 text-white uppercase" onClick={handleFiltrar}>Buscar</button>
        </form>
        
        <div>
        <div className="relative flex items-center text-gray-400">
            <input className="font-roboto y-0p rounded-lg pl-9 border-t border-b border-l border-verde bg-white text-base dark:bg-gray-400 dark:text-white" 
                  type='text'
                  placeholder="Buscar Usuario ..."
                  onChange={handleFilter}/>

            <div className="absolute pl-2 pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 dark:text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
            </div>
          
          </div>
          { filteredData.length != 0 && (
            <div className="mt-2 w-72 h-48 bg-white overflow-hidden overflow-y-auto scrollbar-hide dark:bg-gray-800 ">
              
              {filteredData.map( data => (
                    <div className="py-2 gap-2 border-b-2 items-center dark:border-dorado" key={data.nick}>
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
        <button className="px-1 border-solid border-b-2 border-verde font-roboto focus:bg-verde focus:text-white dark:border-dorado dark:focus:bg-dorado" onClick={() => handleClickFiltroTematica('pref')}>
          Preferencias
        </button>
        <button className="px-1 border-solid border-b-2 border-verde font-roboto focus:bg-verde focus:text-white dark:border-dorado dark:focus:bg-dorado" onClick={() => handleClickFiltroTematica('Biologia')}>
          Biología
        </button>
        <button className="px-1 border-solid border-b-2 border-verde font-roboto focus:bg-verde focus:text-white dark:border-dorado dark:focus:bg-dorado" onClick={() => handleClickFiltroTematica('C.Sociales')}>
          C.Sociales
        </button>
        <button className="px-1 border-solid border-b-2 border-verde font-roboto focus:bg-verde focus:text-white dark:border-dorado dark:focus:bg-dorado" onClick={() => handleClickFiltroTematica('Economia')}>
          Economía
        </button>
        <button className="px-1 border-solid border-b-2 border-verde font-roboto focus:bg-verde focus:text-white dark:border-dorado dark:focus:bg-dorado" onClick={() => handleClickFiltroTematica('Electronica')}>
          Electrónica
        </button>
        <button className="px-1 border-solid border-b-2 border-verde font-roboto focus:bg-verde focus:text-white dark:border-dorado dark:focus:bg-dorado" onClick={() => handleClickFiltroTematica('Filologia')}>
          Filología
        </button>
        <button className="px-1 border-solid border-b-2 border-verde font-roboto focus:bg-verde focus:text-white dark:border-dorado dark:focus:bg-dorado" onClick={() => handleClickFiltroTematica('Fisica')}>
          Física
        </button>
        <button className="px-1 border-solid border-b-2 border-verde font-roboto focus:bg-verde focus:text-white dark:border-dorado dark:focus:bg-dorado" onClick={() => handleClickFiltroTematica('Filosofia')}>
          Filosofía
        </button>
        <button className="px-1 border-solid border-b-2 border-verde font-roboto focus:bg-verde focus:text-white dark:border-dorado dark:focus:bg-dorado" onClick={() => handleClickFiltroTematica('Geologia')}>
          Geología
        </button>
        <button className="px-1 border-solid border-b-2 border-verde font-roboto focus:bg-verde focus:text-white dark:border-dorado dark:focus:bg-dorado" onClick={() => handleClickFiltroTematica('Historia')}>
          Historia
        </button>
        <button className="px-1 border-solid border-b-2 border-verde font-roboto focus:bg-verde focus:text-white dark:border-dorado dark:focus:bg-dorado" onClick={() => handleClickFiltroTematica('Informatica')}>
          Informática
        </button>
        <button className="px-1 border-solid border-b-2 border-verde font-roboto focus:bg-verde focus:text-white dark:border-dorado dark:focus:bg-dorado" onClick={() => handleClickFiltroTematica('Ingenieria')}>
          Ingeniería
        </button>
        <button className="px-1 border-solid border-b-2 border-verde font-roboto focus:bg-verde focus:text-white dark:border-dorado dark:focus:bg-dorado" onClick={() => handleClickFiltroTematica('Matematicas')}>
          Matemáticas
        </button>
        <button className="px-1 border-solid border-b-2 border-verde font-roboto focus:bg-verde focus:text-white dark:border-dorado dark:focus:bg-dorado" onClick={() => handleClickFiltroTematica('Mecanica')}>
          Mecánica
        </button>
        <button className="px-1 border-solid border-b-2 border-verde font-roboto focus:bg-verde focus:text-white dark:border-dorado dark:focus:bg-dorado" onClick={() => handleClickFiltroTematica('Medicina')}>
          Medicina
        </button>
        <button className="px-1 border-solid border-b-2 border-verde font-roboto focus:bg-verde focus:text-white dark:border-dorado dark:focus:bg-dorado" onClick={() => handleClickFiltroTematica('Quimica')}>
          Química
        </button>
      </div>

      {/* CARROUSEL */}
      <div className="">
        <h1 className="mt-2 mb-1 text-lg text-left font-noto">Explora <span className="uppercase text-verde dark:text-dorado">novedades</span></h1>
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
              <span className="text-verde dark:text-dorado  font-roboto text-6xl carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="false"> {'<'} </span>
            </button>
            <button
              className="carousel-control-next absolute top-0 bottom-0 items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span className="text-verde dark:text-dorado font-roboto text-6xl carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="false"> {'>'} </span>

            </button>
          </div>
          
        </div>
      </div>

      <div className="">
        <h1 className="mt-2 mb-1 text-lg text-left font-noto">Explora <span className="uppercase text-verde dark:text-dorado">Populares - Artículos</span></h1>
        <div className="flex overflow-x-auto space-x-4">
          {popArticulos.map( cartelera => (
            <CardPubliPop 
              key={cartelera.id}
              cartelera={cartelera}
            />
            ))} 
          
        </div>
      </div>
      <h1 className="mt-1 mb-1 text-lg text-left font-noto">Explora <span className="uppercase text-verde dark:text-dorado">Populares - Recomendaciones</span></h1>
      
      <div className="h-[24vh] overflow-y-scroll scrollbar-hide">
        <div className="items-center justify-center">
          {popRecomend.map( cartelera => (
            <CardRecomend
              key={cartelera.id}
              id={cartelera.id}
              
              titulo={cartelera.titulo}
              autor={cartelera.autor}
              descripcion={cartelera.descripcion}
              link={cartelera.link}
              usuario={cartelera.usuario}
              foto_de_perfil={cartelera.foto_de_perfil}
              nlikes={cartelera.nlikes}
              likemio={cartelera.likemio}
              ncomentarios={cartelera.ncomentarios}
              nguardados={cartelera.nguardados}
              guardadomio={cartelera.guardadomio}
            /> 
          ))}
        </div>
      </div>
      


    </div>
  )
}

export default Explorar
