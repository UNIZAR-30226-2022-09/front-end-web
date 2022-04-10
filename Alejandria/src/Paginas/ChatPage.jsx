import CardPubliPop from "../components/CardPubliPop"
import ListarCardPopRecom from "../components/ListarCardPopRecom"

function ChatPage() {
  return (
    <div className="w-3/6 ">
      <h1 className="text-black text-center font-roboto text-xl">Amplía tu<span
          className="font-roboto text-verde"> {''}conocimiento</span></h1>
      
      <div className="text-lg flex">
        <h1 className="w-1/2">BUSCADOR PALABRA</h1>
        <h1 className="w-1/2 rounded-full border-black">BUSCADOR USER</h1>
      </div>
      <div className="flex overflow-x-auto scrollbar-hide gap-1">
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
        <div id="carouselExampleControls" className="carousel slide relative" data-bs-ride="carousel">
          <div className="carousel-inner relative w-full overflow-hidden">
            <div className="carousel-item active relative float-left w-full">
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
            </div>
          </div>
          <button
            className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div>
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
      <h1 className="mt-2 mb-1 text-lg text-left font-noto">Explora <span className="uppercase text-verde">Populares - Recomendaciones</span></h1>
      
      
      <ListarCardPopRecom />           


    </div>
  )
}

export default ChatPage
