import { useState } from 'react'
import {createBrowserRouter, RouterProvider } from "react-router-dom"

import './App.css'
import './index.css'
import {HomePage} from './components/HomePage.jsx'
import {Signup} from './components/Signup.jsx'
import {Login} from './components/Login.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <HomePage/>
  },
  {
    path:"/signup",
    element: <Signup/>
  },
  {
    path:"/login",
    element: <Login/>
  },
])

function App() {

  return (
    
     <div className="p-4 h-screen flex items-center justify-center">
      <RouterProvider router={router}/>
     </div>
    
  )
}

export default App
