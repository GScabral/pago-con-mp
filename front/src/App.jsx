import Home from "./home/home"
import React from 'react'
import axios from "axios"
import { Route,Routes,useLocation } from 'react-router-dom'


function App() {



  return (
   <div>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
   </div>
  )
}

export default App
