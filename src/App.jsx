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

import SectionContainer from './components/SectionContainer'

import CardSection from './components/CardSection' 

import AboutMe from './components/AboutMe'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <SideMenu></SideMenu>
      <div className='bodyContainer'>
          <Header/>
          <SectionContainer title="Sobre mí">          
            <AboutMe/>  
          </SectionContainer>

          <br></br>
      </div>
    </div>
  )
}

export default App
