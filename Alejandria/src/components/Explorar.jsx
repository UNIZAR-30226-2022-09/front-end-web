import CardPubliPop from "./CardPubliPop"
import ListarCardPopRecom from "./ListarCardPopRecom"
import ListarCardPubli from "./ListarCardPubli"

function Explorar() {
  return (
    <div className="w-3/6 ml-2 mr-2">
      <h1 className="text-black text-center font-roboto text-xl">Amplía tu<span
          className="font-roboto text-verde"> {''}conocimiento</span></h1>
      
      <div className="flex justify-between px-10">
        <form class="flex">
          <input class="font-roboto y-0p rounded-l-lg pl-2 border-t border-b border-l border-verde bg-white" placeholder="Filtrar por palabra"/>
          <button class="font-roboto rounded-r-lg bg-verde p-1 text-white uppercase">Buscar</button>
        </form>
        <form class="flex">
          <input class="font-roboto y-0p rounded-l-lg pl-2 border-t border-b border-l border-verde bg-white" placeholder="Buscar Usuario"/>
          <button class="font-roboto rounded-r-lg bg-verde p-1 text-white uppercase">Buscar</button>
        </form>
      </div>
      
      
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

      <div className="">
        <h1 className="mt-2 mb-1 text-lg text-left font-noto">Explora <span className="uppercase text-verde">novedades</span></h1>
        <div id="carouselExampleControls" className="carousel slide relative " data-bs-ride="carousel">
          <div className="w-6/12 h-[28vh] mx-auto">
            <div className="carousel-inner relative w-full overflow-hidden">
              <div className="carousel-item active relative float-left w-full">
                <img
                  src="https://edit.org/photos/img/blog/ppe-crear-portadas-de-libros-online.jpg-840.jpg"
                  className="block h-[28vh]"
                  alt="Wild Landscape"
                />
              </div>
              
              <div className="carousel-item relative float-left w-full h-fit">
                <img
                  src="https://edit.org/photos/img/blog/ppe-crear-portadas-de-libros-online.jpg-840.jpg"
                  className="block h-[28vh]"
                  alt="Camera"
                />
              </div>
              <div className="carousel-item relative float-left w-full">
                <img
                  src="https://edit.org/photos/img/blog/ppe-crear-portadas-de-libros-online.jpg-840.jpg"
                  className="block h-[28vh]" 
                  alt="Exotic Fruits"
                />
              </div>
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
        <h1 className="mt-2 mb-1 text-lg text-left font-noto">Explora <span className="uppercase text-verde">Populares - Publicaciones</span></h1>
        <div class="flex overflow-x-auto space-x-4">
          <CardPubliPop />
          <CardPubliPop />          
          <CardPubliPop />          
          <CardPubliPop />          
          <CardPubliPop />          
          <CardPubliPop />          
          <CardPubliPop /> 
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
