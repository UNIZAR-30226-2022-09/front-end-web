function CardPubli() {
  return (
    <div className="bg-gray-200 px-5 py-5 mb-3 rounded-2xl border-2 border-verde">
       
        <div className="mb-2 gap-2 items-center hover:underline ">
            
            <button
              type="submit"
              className=" px-2 flex text-1xl gap-2 cursor-pointer transition-all items-center"
            >
            <img className="w-10 h-10 rounded-full border border-gray-100 shadow-sm" 
             src="https://randomuser.me/api/portraits/women/81.jpg" 
             alt="" 
            />
            @nombreUsuario
            </button>

        </div>
        
        <div className="">
            <img className="border border-gray-100" 
                src="https://static3.depositphotos.com/1005412/218/i/600/depositphotos_2186038-stock-photo-kitten-lays-isolated.jpg" 
                alt="" 
            />
        
        </div>
        
        

        <div className="justify-between flex mt-2 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
            </svg>

        </div>

        <h1 className="mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quia incidunt id in fugit 
          eos maxime? Mollitia sequi illo, eligendi pariatur, quibusdam recusandae, repellat rem ullam iste ut quas architecto!
        </h1>

      </div>

      
  )
}

export default CardPubli
