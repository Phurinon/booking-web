import Navbar from '@/components/navbar/Navbar'
import React from 'react'
import { Outlet } from 'react-router'

function LayoutAdmin() {
  return (
    <div>
        <Navbar/>
        <hr />
        <Outlet/>
    </div>
  )
}

export default LayoutAdmin