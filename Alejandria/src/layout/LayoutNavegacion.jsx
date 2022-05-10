import React from 'react'
import {Outlet} from 'react-router-dom'
import Navegacion from "../components/Navegacion"


function LayoutNavegacion() {
  return (
    <div className="flex">
      <div className="dark:bg-black transition duration-500 h-screen md:w-1/6">
        <Navegacion />
      </div>
      <div className="md:w-5/6 h-screen">
        <Outlet />
      </div>     
    </div>
  )
}

export default LayoutNavegacion
