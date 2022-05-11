
import CardPubli from "./CardPubli"
import CardRecomend from "./CardRecomend"
import { useNavigate } from 'react-router-dom'
import {useEffect, useState} from 'react'

function Publicaciones({publiYRecomends}) {
  
  const [filteredData, setFilteredData] = useState([])
  const navigate = useNavigate()

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

  // const handleClick = () => {
  //   const url = `/myAccount/externalUser/${data.nick}`
  //   console.log(url);
  //   // navigate(url)
  // };

  return (
    <div className=" w-3/6 border-l-2 border-r-2">
      <div className="h-screen overflow-y-scroll scrollbar-hide">
        <div className="ml-3 mr-2 mt-3 items-center justify-center">
          {/* {publiYRecomends.map(myFunct)}              */}
          
          <div className="flex">
            <input className="font-roboto y-0p rounded-l-lg pl-2 border-t border-b border-l border-verde bg-white" 
                  type='text'
                  placeholder="Buscar Usuario"
                  onChange={handleFilter}/>

            <button className="font-roboto rounded-r-lg bg-verde p-1 text-white uppercase">Buscar</button>
          
          </div>
          { filteredData.length != 0 && (
            <div className="mt-2 w-72 h-48 bg-white overflow-hidden overflow-y-auto scrollbar-hide">
              
              {filteredData.map( data => (
                    <div className="py-2 gap-2 border-b-2 items-center" key={data.nick}>
                      <button
                        type="button"
                        className=" px-2 flex text-1xl gap-2 cursor-pointer transition-all items-center"
                        onClick={() => navigate(`/myAccount/externalUser/${data.nick}`)}
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
    </div>
  )
}

export default Publicaciones
