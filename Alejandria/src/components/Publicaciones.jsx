
import ListarCardPubli from "./ListarCardPubli"

function Publicaciones() {
  return (
    <div className=" w-3/6 border-l-2 border-r-2">
      
      <div className="h-screen overflow-y-scroll scrollbar-hide">
        <div className="ml-3 mr-2 mt-3 items-center justify-center">
          <ListarCardPubli />          
        </div>
      </div>
    </div>
  )
}

export default Publicaciones
