import { Outlet } from "react-router-dom"
import icon from "../public/nobck-icon.png"


const Presentacion = () => {
  return (
    <>
        <div className="md:w-2/5 bg-bck-img bg-cover h-screen">
            <div className='h-screen px-4 py-12'>
                <div className='container rounded-xl bg-slate-50/75 h-full'>
                    <>  
                        <div className='md:h-1/2 px-16'>
                            <img src={icon} className='w-full h-full'/>
                        </div>
                        <div className=' md:h-1/2 '>
                            <h1 className='font-roboto text-center text-4xl 
                            mt-3 p-5'>Bienvenido a <span className=
                            'text-verde font-noto text-4xl'>Alejandria</span></h1>
                            <p className='text-center font-roboto text-3xl mt-3'>La red social del conocimiento</p>
                            <p className='text-center font-roboto text-xl italic mt-9'>
                                Comparte tu trabajo con nuestra comunidad de usuarios,
                                recomienda los estudios de otros autores, crea nuevos contactos
                                y explora un sin fin de publicaciones.
                            </p>
                        </div>
                    </>
                </div>
            </div>
        </div>
        <Outlet />
    </>
  )
}

export default Presentacion

