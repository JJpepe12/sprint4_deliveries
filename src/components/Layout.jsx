import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  const store = useSelector(state => state)
  console.log(store)
  return (
      <div>
          <div>NavBar</div>
          <Outlet/>
    </div>
  )
}

export default Layout