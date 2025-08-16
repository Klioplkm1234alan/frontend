import React from 'react'
import BottomNavBar from './components/BottomNavBar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
      <>
          <main>
              <Outlet/>
          </main>
          <BottomNavBar></BottomNavBar>
      </>
  )
}

export default Layout