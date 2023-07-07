import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Piediv'
import About from '../Project'
import Contact from '../Contact'
import Skills from '../Skills'
import Projects from '../About'

export default function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contect' element={<Contact/>}></Route>
        <Route path='/skills' element={<Skills/>}></Route>
        <Route path='/projects' element={<Projects/>}></Route>
      
    </Routes>
  )
}
