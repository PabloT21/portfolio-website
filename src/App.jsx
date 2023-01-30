import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

// Fonts
<>
  <link href="https://fonts.cdnfonts.com/css/cream-cake?styles=55747" rel="stylesheet"> </link>
  <link rel="preconnect" href="https://fonts.googleapis.com"></link>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
  <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap" rel="stylesheet"></link>                
</>                


// Components
import Header from './components/Header' 

import SideMenu from './components/SideMenu' 


import AboutMe from './components/AboutMe'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <SideMenu></SideMenu>
      <div className='bodyContainer'>
          <h1 id="header-title"> Pablo Terrone</h1>
          <div className='writing-container'>
            <h2 id="header-subtitle"> Desarrollador web FullStack
              <span id='writing-machine'>&#160;
              </span>
            </h2>
          </div>
          <br></br>
          <AboutMe></AboutMe>
      </div>
    </div>
  )
}

export default App
