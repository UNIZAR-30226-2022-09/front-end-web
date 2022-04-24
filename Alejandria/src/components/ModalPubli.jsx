import {useEffect, useState} from 'react'
import CardPubli from "../components/CardPubli"


function ModalPubli(props) {
  const [infoPubli, setInfoPubli] = useState({});
  // const [descripcion, setDescripcion] = useState('');
  // const [link, setLink] = useState('');
  // const [foto, setFoto] = useState('');

  // const [error, setError] = useState(false);

  // const [selected, setSelected] = useState([]);

  const obtenerInfoPubliApi = async () => {
    try {
      
      const urlDatos = `http://localhost:4000/publicaciones/${props.idPubliAMostrar}`
      const resDatos = await fetch(urlDatos)
      const resultDatos = await resDatos.json()
      console.log(resultDatos);
      setInfoPubli(resultDatos);

    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(() => {
    obtenerInfoPubliApi()

  }, []);

  // // function uploadImg(){
  // //   console.log('from uploadImg')
  // // }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
    
    

  //   //selected.length
  //   if( selected.length === 0){
  //     setError(true)  
  //   } else {
  //     setError(false)
  //     localStorage.setItem('primeraVez', JSON.stringify(false))
  //     setModal(false)
  //     localStorage.setItem('preferencias', JSON.stringify(selected))
  //     setSelected(JSON.stringify(selected)); 

      
  //     // console.log(nombre);
  //     // console.log(descripcion);
  //     // console.log(link);
  //     // localStorage.setItem('nomUser', JSON.stringify(nombre))
  //     // localStorage.setItem('descripcion', JSON.stringify(descripcion))
  //     // localStorage.setItem('link', JSON.stringify(link))
  //     // localStorage.setItem('preferencias', JSON.stringify(selected))
  //     // guardarDatos({nombre, descripcion, link})
  //     //-----------------------------------------------------------
  //     const prueba = {...datosUser}
  //     prueba.nombre = nombre
  //     prueba.descripcion = descripcion
  //     prueba.link = link

  //     const preferencias = []
  //     for (var i = 0; i < selected.length; i++) {
  //       preferencias[i] = selected[i].value
  //     }
  //     prueba.preferencias = preferencias

  //     console.log('Objeto prueba con valores modificados', prueba);

  //     const url = `http://localhost:4000/profile/${prueba.id}`
  //     const actuAPI = async (final) => { 
  //       try {        
  //         const respuesta = await fetch(url, {
  //           method : 'PUT',
  //           body : JSON.stringify(prueba),
  //           headers : {
  //               'Content-Type' : 'application/json'
  //           }
  //         })
  //         await respuesta.json()

  //       } catch (error) {
  //         console.log(error);
  //       }
  //     }
  //     actuAPI()
  //     refreshPage()
  //   }
  //}

  return (
    <div>
      <div id="modalEditarPerfil" tabIndex="-1" className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full bg-zinc-600 bg-opacity-50">
          <div className="relative p-4 w-full max-w-5xl h-full md:h-auto text-center mx-auto my-auto">
              <div className="relative bg-white rounded-lg shadow dark:bg-gray-900 dark:text-black">
                  <CardPubli 
                    id={infoPubli.id}
                    fotoPerfil={infoPubli.fotoPerfil}
                    nick={infoPubli.nick}
                    portada={infoPubli.portada}
                    comentario={infoPubli.comentario}
                    nLikes={infoPubli.nLikes}
                    nComents={infoPubli.nComents}
                    nGuardados={infoPubli.nGuardados}
                  />
              </div>
          </div>
      </div>
      
    </div>
  )
}

export default ModalPubli
