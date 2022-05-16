function CardPubliPop({portada}) {
  return (
    <div className= "flex-shrink-0 overflow-hidden rounded-xl border-2 border-verde h-[25vh] w-40">
        <img    className="object-fill h-fill w-auto"
                src={portada} 
            />
      </div> 
  )
}

export default CardPubliPop
