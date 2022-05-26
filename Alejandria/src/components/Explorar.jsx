import useDarkmode from "../hook/useDarkmode";
import CardPubliPop from "./CardPubliPop"
import {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import CardRecomend from "./CardRecomend"
import ModalPubli from "./ModalPubli"




function Explorar() {
  const [explorar, setExplorar] = useState([])
  const [popArticulos, setPopArticulos] = useState([])
  const [popRecomend, setPopRecomend] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const navigate = useNavigate()
  const [colorTheme, setTheme] = useDarkmode();
  const [modal, setModal] = useState(false)


  const [palabraABuscar, setPalabraABuscar] = useState('')
  const [tematicaFiltro, setTematicaFiltro] = useState('pref')

  const [offsetArtic, setOffsetArtic] = useState(0)
  const [offsetRecomend, setOffsetRecomend] = useState(0)
  
  const [longResultadoRecomend, setLongResultadoRecomend] = useState(0)
  const [longResultadoNovedades, setLongResultadoNovedades] = useState(0)
  const [longResultadoArtic, setLongResultadoArtic] = useState(0)
  
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

      if (resRecomend.ok == false){
        return obtenerExplorar(token, filtrado, tematicas, offs)
      }

      const resultPubli = await resRecomend.json()
      console.log('resultNovedades:', resultPubli);

      if(resultPubli.fin == undefined){
        // console.log('resultExplorar:', resultPubli);

        const result = Object.entries(resultPubli).map(([id, values]) => ({ id, ...values }));
        // console.log('result:', result);


        setExplorar(result);

        const longitud = result.length
        setTimeout(()=> {
          setLongResultadoNovedades(longitud)
        },400)

      }else{
        if(noSeEncuentran){
          setExplorar([]);
        }
        setLongResultadoNovedades(0)
      }
      
    } catch (error) {
      console.log(error);
    }
  }

  const obtenerPopularesArticulos = async (token, filtrado, tematicas, offs) => {
    try {
      const urlPubli = 'http://51.255.50.207:5000/PopularesArticulos'
      const resRecomend = await fetch(urlPubli, {
        headers : {
          'Content-Type' : 'application/json',
          'filtrado' : filtrado,
          'limit' : 4,
          'tematicas' : tematicas,
          'token' : token,
          'offset' : offs
        }
      })
      if (resRecomend.ok == false){
        return obtenerPopularesArticulos(token, filtrado, tematicas, offs)
      }

      const resultPubli = await resRecomend.json()
      console.log('resultPopArt:', resultPubli);
      // console.log('ofsset desde obtenerPopularesArticulos',offs);

      let noSeEncuentran = (resultPubli.fin != undefined && offs == 0)

      if(resultPubli.fin == undefined){
        // console.log('resultExplorar:', resultPubli);

        const result = Object.entries(resultPubli).map(([id, values]) => ({ id, ...values }));
        console.log('offset:', offs);
        // console.log('resultArtic:', result);

        setPopArticulos(prevPublis =>  prevPublis.concat(result));
        // console.log('popArticulos', popArticulos);

        const longitud = result.length
        setTimeout(()=> {
          setLongResultadoArtic(longitud)
        },400)

      }else{
        if(noSeEncuentran){
          setPopArticulos([]);
        }

        setLongResultadoArtic(0)

        setOffsetArtic(0)

        // console.log('reseteando pop articulos');

      }
      
    } catch (error) {
      console.log(error);
    }
  }

  const obtenerPopularesRecomendaciones = async (token, filtrado, tematicas, offs) => {
    try {
      const urlPubli = 'http://51.255.50.207:5000/PopularesRecomendaciones'
      
      const resRecomend = await fetch(urlPubli, {
        headers : {
          'Content-Type' : 'application/json',
          'filtrado' : filtrado,
          'limit' : 4,
          'tematicas' : tematicas,
          'token' : token,
          'offset' : offs
        }
      })
      if (resRecomend.ok == false){
        return obtenerPopularesRecomendaciones(token, filtrado, tematicas, offs)
      }

      const resultPubli = await resRecomend.json()
      // console.log('resultPopRecomend:', resultPubli);

      let noSeEncuentran = (resultPubli.fin != undefined && offs == 0)

      if(resultPubli.fin == undefined){
        console.log('resultPopRecomend:', resultPubli);

        const result = Object.entries(resultPubli).map(([id, values]) => ({ id, ...values }));
        // console.log('offset:', offs);
        // console.log('resultArtic:', result);
        if(offs == 0){
          setPopRecomend(result);
        }else{
          setPopRecomend(prevPublis =>  prevPublis.concat(result));

        }

        const longitud = result.length
        setTimeout(()=> {
          setLongResultadoRecomend(longitud)
        },400)
        
      }else{
        if(noSeEncuentran){
          setPopRecomend([]);
        }
        setLongResultadoRecomend(0)
        setOffsetRecomend(0)
      }
      
    } catch (error) {
      console.log(error);
    }
  }

  const handleModal = () => {
    console.log('dsafjkdbnsflsbdfdsa');
    setModal(true)
  }
  
  function myFunct(cartelera, i){
    if(longResultadoNovedades == 1){
      if(cartelera.tipo == 1){
        return    <button type="button" onClick={handleModal}>
                    <img
                      src={cartelera.portada}
                      className="block h-[28vh]"
                    />
                    {modal && <ModalPubli cartelera={cartelera} setModal={setModal} tipo={1}/>}
                  </button> 
                
      }else{
          return  <CardRecomend
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
      }
    }else{
      if(i == 1){
        if(cartelera.tipo == 1){
          return   <div className="carousel-item active relative float-left w-full h-fit" key={i}>
                    <button type="button" onClick={handleModal}>
                      <img
                        src={cartelera.portada}
                        className="block h-[28vh]"
                      />
                    </button>
                    {modal && <ModalPubli cartelera={cartelera} setModal={setModal} tipo={1}/>}

                  </div>
        }else{
            return  <div className="carousel-item active relative float-left w-full h-[28vh] overflow-y-auto" key={i}> 
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
                    </div>
        }
         
      }else{
        if(cartelera.tipo == 1){
          return    <div className="carousel-item relative float-left w-full h-fit" key={i}>
                      <button type="button" onClick={handleModal}>
                        <img
                          src={cartelera.portada}
                          className="block h-[28vh]"
                        />
                      </button>
                      {modal && <ModalPubli cartelera={cartelera} setModal={setModal} tipo={1}/>}
                      
                    </div>
        }else{
          return    <div className="carousel-item relative float-left w-full h-[28vh] overflow-y-auto" key={i}>
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
                    </div>
        }
  
        
      }
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

    obtenerExplorar(token, palabraABuscar, tematicaFiltro)
    obtenerPopularesArticulos(token, palabraABuscar, tematicaFiltro, offsetArtic)
    obtenerPopularesRecomendaciones(token, palabraABuscar, tematicaFiltro, offsetRecomend)
    setPalabraABuscar('');
  }

  const handleClickFiltroTematica = (tematica) => {
    const token = JSON.parse(localStorage.getItem('token'))
    setTematicaFiltro(tematica)
    console.log('handleClickFiltroTematica -> tematica: ', tematica);
    console.log('handleClickFiltroTematica -> palabraABuscar: ', palabraABuscar);
    setOffsetRecomend(0)
    setOffsetArtic(0)

    obtenerExplorar(token, palabraABuscar, tematica)
    obtenerPopularesArticulos(token, palabraABuscar, tematica, offsetArtic)
    obtenerPopularesRecomendaciones(token, palabraABuscar, tematica, offsetRecomend)
  };

  const handleClickArticulos= () => {
    const token = JSON.parse(localStorage.getItem('token'))
    let prueba = offsetArtic
    prueba = prueba + 1
    setOffsetArtic(prueba)
    console.log('ofsset desde handleclick',offsetArtic);
    // console.log('offset: ',offset);
    obtenerPopularesArticulos(token, palabraABuscar, tematicaFiltro, prueba)

    
  };

  const handleClickRecomend = () => {
    const token = JSON.parse(localStorage.getItem('token'))
    let prueba = offsetRecomend
    prueba = prueba + 1
    setOffsetRecomend(prueba)
    // console.log('offset: ',offset);
    obtenerPopularesRecomendaciones(token, palabraABuscar, tematicaFiltro, prueba)

    
  };

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token'))
    obtenerExplorar(token, palabraABuscar, tematicaFiltro)
    obtenerPopularesArticulos(token, palabraABuscar, tematicaFiltro, offsetArtic)
    obtenerPopularesRecomendaciones(token, palabraABuscar, tematicaFiltro, offsetRecomend)
  }, []);

  return (
    <div className="w-3/6 px-2 dark:bg-gray-900 dark:text-white h-screen overflow-y-scroll scrollbar-hide">
      <h1 className="text-black text-center dark:text-white font-roboto text-xl">Amplía tu<span
          className="font-roboto text-verde dark:text-dorado"> {''}conocimiento</span></h1>
      
      <div className="flex justify-between px-10">
        <form className="flex">
          <input className="font-roboto y-0p rounded-l-lg pl-2 border-t border-b border-l border-verde bg-white dark:bg-gray-400" placeholder="Filtrar por palabra" onChange={handleInputFiltrar} value={palabraABuscar}/>
          <button type='button' className="font-roboto rounded-r-lg bg-verde dark:bg-dorado p-1 text-white uppercase" onClick={handleFiltrar}>Buscar</button>
        </form>
        
        <div className="z-40">
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
      <div className="pt-1 flex overflow-x-auto scrollbar-hide gap-1 z-30">
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
        {/* 1 */}
        { longResultadoNovedades === 0 ? 
          <div className="text-gray-500 pt-5 text-center h-[27vh]">
            <div className="italic font-roboto text-3xl pt-2">
              No se ha encontrado ningún resultado
            </div>
          </div>
        : 
        <div id="carouselExampleControls" className="carousel slide relative " data-bs-ride="carousel">
          <div className="w-6/12 h-[27vh] mx-auto">
            <div className="carousel-inner relative w-full overflow-hidden">
              {explorar.map(myFunct)}  
              {/* <div className="carousel-item active relative float-left w-full">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
                  className="block w-full"
                  alt="Wild Landscape"
                />
              </div>
              <div className="carousel-item relative float-left w-full">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
                  className="block w-full"
                  alt="Camera"
                />
              </div>
              <div className="carousel-item relative float-left w-full">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
                  className="block w-full"
                  alt="Exotic Fruits"
                />
              </div>*/}
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
        }
        
      </div>

      <div className="">
        <h1 className="mt-2 text-lg text-left font-noto">Explora <span className="uppercase text-verde dark:text-dorado">Populares - Artículos</span></h1>
        <div className="flex h-[27vh] overflow-x-auto space-x-4 items-center justify-center">
          {popArticulos.length === 0 
          ? 
          <div className="text-gray-500 pt-5 text-center ">
            <div className="italic font-roboto text-3xl pt-2">
              No se ha encontrado ningún resultado
            </div>
          </div>
          : 
          popArticulos.map( cartelera => (
            <CardPubliPop 
              key={cartelera.id}
              cartelera={cartelera}
            />
          ))}

          { longResultadoArtic >  3 
            ? 
              
              <div className="flex flex-col items-center justify-center pb-4">
                <button type="button" onClick={handleClickArticulos}>
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
      <h1 className="mt-1 mb-1 text-lg text-left font-noto">Explora <span className="uppercase text-verde dark:text-dorado">Populares - Recomendaciones</span></h1>
      
      <div className="h-[24vh] overflow-y-scroll scrollbar-hide items-center justify-center">
        <div className="">
          {popRecomend.length === 0 
          ? 
          <div className="text-gray-500 pt-5 text-center">
            <div className="italic font-roboto text-3xl pt-2">
              No se ha encontrado ningún resultado
            </div>
          </div>
          : 
            popRecomend.map( cartelera => (
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
            )) }
          { longResultadoRecomend >  3 
            ? 
              
              <div className="flex flex-col items-center justify-center pb-4">
                <button type="button" onClick={handleClickRecomend}>
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
  )
}

export default Explorar
