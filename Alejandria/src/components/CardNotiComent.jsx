function CardNotiComent(props) {
  return (
    <div className="bg-gray-200 px-5 py-5 mb-3 rounded-2xl border-2 border-verde dark:border-dorado dark:bg-black dark:text-white">
       
        <div className="mb-2 gap-2 items-center hover:underline ">
            
            <button
              type="submit"
              className=" px-2 flex text-1xl gap-2 cursor-pointer transition-all items-center"
            >
            <img className="w-10 h-10 rounded-full shadow-sm" 
             src= {props.fotoPerfil} 
             alt="" 
            /> 
            <div className="font-roboto">@{props.nickUser}</div>
            </button>

        </div>
        
        

        <h1 className="mt-2 text-justify font-roboto">
          <span className="text-lg cursor-pointer transition-all hover:underline font-noto">
            @{props.nickOtroUser}{"   "}
          </span>
          ha comentado 
          <span className="italic">
            {"   "}{props.comentario}{"   "}
          </span>
          en tu{ }
          <span className="text-blue-400">
            {"   "}publicacion{ }{props.idPubli}XCAMBIAR
          </span>. 
        </h1>

      </div>

      
  )
}

export default CardNotiComent
