import { useState } from 'react'


// CSS Stylesheets
import './App.css'
import './Cards.css'
import './TopNavbar.css'

// Fonts
<>
  <link href="https://fonts.cdnfonts.com/css/cream-cake?styles=55747" rel="stylesheet"> </link>
  <link rel="preconnect" href="https://fonts.googleapis.com"></link>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
  <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap" rel="stylesheet"></link>                
</>                

// Components
import Inicio from './components/Inicio' 
import Menu from './components/Menu' 

import AboutMe from './components/AboutMe'
import Experiencia from './components/Experiencia'
import Estudios from './components/Estudios'

import { Routes, Route } from "react-router-dom";


// END Of IMPORTS

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Menu></Menu>

      <Routes>
        <Route path="/" element={ <Inicio/> } />
        <Route path="about" element={ <AboutMe/> } />
        <Route path="experience" element={ <Experiencia/> } />
        <Route path="studies" element={ <Estudios/> } />


      </Routes>

    </div>
  )
}

export default App
