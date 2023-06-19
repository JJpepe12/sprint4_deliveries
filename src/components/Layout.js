import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
      <div>
          <div>Hola mundo</div>
          <Outlet/>
    </div>
  )
}

export default Layout