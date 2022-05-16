import React from 'react'
import {Outlet} from 'react-router-dom'
import Navegacion from "../components/Navegacion"


function LayoutNavegacion() {
  return (
    <div className="flex">
      <div className="dark:bg-gray-900 transition duration-500 h-screen lg:w-1/6 md:w-1/5">
        <Navegacion />
      </div>
      <div className="lg:w-5/6 md:4/5 h-screen">
        <Outlet />
      </div>     
    </div>
  )
}

export default LayoutNavegacion
