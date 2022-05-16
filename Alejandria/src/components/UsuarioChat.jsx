import React from 'react'
import icon from "../public/icon.png"



const UsuarioChat = () => {
  return (
      <div className="bg-gray-200 rounded-xl p-4 mb-4 flex hover:bg-gray-300">
          <img src={icon} className='rounded-full w-12 mr-4' />
          <div className="w-full overflow-hidden">
              <div className="flex mb-1">
                <p className="font-roboto font-bold text-xl">@Diego_Rodriguez</p>
              </div>
              <small className="overflow-ellipsis overflow-hidden
                    whitespace-nowrap block text-base font-roboto font-light text-gray-600"
              >
                Lorem ipsum tu padre fjsajfjd es la ostia tio increible djsnfjidnsjif
              </small>
          </div>
      </div>
  )
}

export default UsuarioChat