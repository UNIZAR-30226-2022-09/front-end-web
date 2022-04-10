function CardNotiLike() {
  return (
    <div className="w-full bg-gray-200 px-5 py-5 mb-3 rounded-2xl border-2 border-verde">
       
        <div className="mb-2 gap-2 items-center hover:underline ">
            
            <button
              type="submit"
              className=" px-2 flex text-1xl gap-2 cursor-pointer transition-all items-center"
            >
            <img className="w-10 h-10 rounded-full border border-gray-100 shadow-sm" 
             src="https://randomuser.me/api/portraits/women/81.jpg" 
             alt="" 
            /> 
            <div className="font-roboto">@nombreUsuario</div>
            </button>

        </div>
        
        

        <h1 className="mt-2 text-justify font-roboto">
          <spam className="text-lg">@nombreUsuario</spam> te ha dado me gusta en una publicación.
        </h1>

      </div>

      
  )
}

export default CardNotiLike
