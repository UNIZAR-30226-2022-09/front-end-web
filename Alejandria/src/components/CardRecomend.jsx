

function CardRecomend(props) {
  return (
    <div className="bg-gray-200 px-5 py-5 mb-3 rounded-2xl border-2 border-verde">
       
        <div className="mb-2 gap-2 items-center hover:underline ">
            
            <button
              type="submit"
              className=" px-2 flex text-1xl gap-2 cursor-pointer transition-all items-center"
            >
            <img className="w-10 h-10 rounded-full border border-gray-100 shadow-sm" 
             src={props.fotoPerfil}  
             alt="" 
            />
            <div className="font-roboto">@{props.nick} </div>
            </button>

        </div>
        <h1 className="text-xl mt-2 font-roboto">
          {props.titArticulo} - {props.autorArticulo}
        </h1>
        <h1 className="mt-2 text-justify font-roboto">
          {props.comentario}
        </h1>
        
        <div className="flex space-x-5 ">
            <div className="flex mt-2 mb-2 gap-1">
              <button className="group focus:text-red-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
              <div className="font-roboto">{props.nLikes}</div>
            </div>

            <div className="flex mt-2 mb-2 gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <div className="font-roboto">{props.nComents}</div>
            </div>

            <div className="flex mt-2 mb-2 gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
              <div className="font-roboto">{props.nGuardados}</div>
            </div>

            <div className="flex mt-2 mb-2 gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
              </svg>
            </div>
        </div>

        

      </div>

    
  )
}

export default CardRecomend
