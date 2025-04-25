import React from 'react'
import Headar from './Common/Headar'
import Footer from './Common/Footer'
import { Outlet } from 'react-router'

function Layout() {
  return (
   <>
    <Headar/>
    <Outlet/>
    <Footer/>
   </>
  )
}

export default Layout