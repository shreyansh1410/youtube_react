import React from 'react'
import Sidebar from './sidebar'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='flex max-w-full max-h-[650px]'>
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default Body;
