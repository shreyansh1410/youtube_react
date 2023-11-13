import React from 'react'

const Button = ({name}) => {
  return (
    <div>
      <button className='bg-gray-200 mx-4 mb-2 px-2 py-1 rounded-lg font-semibold whitespace-nowrap text-sm'>{name}</button>
    </div>
  )
}

export default Button;
