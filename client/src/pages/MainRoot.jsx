import React from 'react'
import {Outlet} from  "react-router-dom" 
import Navbar from '../components/Navbar'

const MainRoot = () => {
  return (
   <>
   <Outlet/>
   <Navbar/>
   </>
  )
}

export default MainRoot