import React from 'react'
import {Outlet} from 'react-router-dom'
import Navegacion from "../components/Navegacion"


function LayoutNavegacion() {
  return (
    <div className="flex">
      <div className="dark:bg-black transition duration-500">
        <Navegacion />
      </div>
      <div className="">
        <Outlet />
      </div>     
    </div>
  )
}

export default LayoutNavegacion
