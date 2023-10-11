import React from 'react'

const Error = ({children}) => {
  return (
    <div className='bg-red-800 text-white text-center p-3'>{children}</div>
  )
}

export default Error