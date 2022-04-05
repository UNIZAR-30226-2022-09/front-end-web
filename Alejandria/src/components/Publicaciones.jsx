
import ListarCardPubli from "./ListarCardPubli"

function Publicaciones() {
  return (
    <div className=" w-3/6 border-l-2 border-r-2">
      <div className="text-lg mx-5 text-left font-medium ">
        <h1>HOME</h1>
      </div>
      <div className="h-screen overflow-y-scroll scrollbar-hide ">
        <div className="mx-3   mt-3 items-center justify-center">
          
          <ListarCardPubli />

          <ListarCardPubli />
          <ListarCardPubli />
          <ListarCardPubli />            
        </div>
      </div>
    </div>
  )
}

export default Publicaciones
