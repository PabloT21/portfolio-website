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
import Header from './components/Header' 

import SideMenu from './components/SideMenu' 

import SectionContainer from './components/SectionContainer'

import CardSection from './components/CardSection' 

import AboutMe from './components/AboutMe'

import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';

// END Of IMPORTS

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

          <div >
            <h1 className="section-title">Experiencia <WorkIcon fontSize="inherit"></WorkIcon></h1>
          </div> 

          <SectionContainer title="">          
          </SectionContainer>

          <h1 className="section-title">Estudios <SchoolIcon fontSize="inherit"></SchoolIcon></h1>
          
          <SectionContainer title="">          
          </SectionContainer>

          <br></br>
      </div>
    </div>
  )
}

export default App
