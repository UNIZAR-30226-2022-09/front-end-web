
import ListarCardPubli from "./ListarCardPubli"

function Publicaciones() {
  return (
    <div className=" w-3/6 border-l-2 border-r-2">
      <div className="h-screen overflow-y-scroll">
        <div className="mx-3 mt-3 items-center justify-center">
          <ListarCardPubli />          
        </div>
      </div>
    </div>
  )
}

export default Publicaciones
