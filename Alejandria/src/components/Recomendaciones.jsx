import CardRecomend from "./CardRecomend"


function Recomendaciones() {
  return (
    <div className="w-2/6">
      <div className="text-lg mx-5 text-left font-medium ">
        <h1>Recomendaciones</h1>
      </div>
      <div className="h-screen overflow-y-scroll scrollbar-hide ">
        <div className="mx-5 mt-3 items-center justify-center">
          
          <CardRecomend />
          <CardRecomend />         
          <CardRecomend />         
          <CardRecomend />         
          <CardRecomend />         
          <CardRecomend />         
          <CardRecomend />         

        </div>
      </div>
      
    </div>
  )
}

export default Recomendaciones
