import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import Menu from '../components/menu/Menu'

function Layout () {
  return (
    <div>
      <nav>
        <Navbar />
        <Menu />
      </nav>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>Here is footer.</p>
      </footer>
    </div>
  )
}

export default Layout
