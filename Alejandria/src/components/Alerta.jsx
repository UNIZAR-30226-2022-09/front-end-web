import React from 'react'

const Alerta = ({children}) => {
  return (
    <div className='my-3 rounded-lg text-lg font-roboto p-3 text-red-600'>
      {children}
    </div>
  )
}

export default Alerta