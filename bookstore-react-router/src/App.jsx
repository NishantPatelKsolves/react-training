// import { useState } from 'react'
import { Link } from "react-router-dom";

import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <div className='app-container'>
      A simple bookstore application that utilizes React Router for navigation.
      <p><Link to={'home'}>Home Page</Link></p>
      <p><Link to={'about'}>About Page</Link></p>
      <p><Link to={'contact'}>Contact Page</Link></p>
      </div>
    </>
  )
}

export default App
