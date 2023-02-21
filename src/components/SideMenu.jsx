import React from 'react'

import spanish from '../assets/spanish.webp'
import english from '../assets/english.webp'

import github from '../assets/logos/github.png'
import linkedin from '../assets/logos/linkedin.png'


import MailIcon from '@mui/icons-material/Mail';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';


const SideMenu = () => {
  return (
    <div className="sidenav">
        
        {/* Para agregar selector de lenguaje ES | EN

        <div id='language-container'>
            <img className='language-icon' src={spanish}></img>
            <img className='language-icon' src={english}></img>
        </div>
        */}
        <div className='navMenu-container'>

        <a href="">
        <div className='navMenu-item'>
                <div className='navMenu-icon'>
                    <PersonIcon style={{ color: "black" }}  fontSize="medium"></PersonIcon>
                </div>
                <h1 className='navMenu-text'>Sobre mí</h1>
        </div>
        </a>    


        
            <a className='navMenu-item' href="">
            <div className='navMenu-item'>
                <div className='navMenu-icon'>
                    <WorkIcon  style={{ color: "black" }} fontSize="medium"></WorkIcon>
                </div>
                <h1 className='navMenu-text'>Experiencia</h1>
                </div>

            </a>

        <a href="">
        <div className='navMenu-item'>
                <div className='navMenu-icon'>
                    <SchoolIcon  style={{ color: "black" }} fontSize="medium"></SchoolIcon>
                </div>
                <h1 className='navMenu-text'>Estudios</h1>
        </div>
        </a>


          <a href="">
          <div className='navMenu-item'>

            <div className='navMenu-icon'>
                <MailIcon  style={{ color: "black" }} fontSize="medium"></MailIcon>
            </div>
                <h1 className='navMenu-text'>Contacto</h1>
        </div>
        </a>


        </div>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <a href="https://github.com/PabloT21">
                <img className='side-icon' src={github}></img>
            </a>
            <a href="https://www.linkedin.com/in/pablo-terrone-37b19216b/">
                <img className='side-icon' src={linkedin}></img>
            </a>
        </div>

    </div>
  )
}

export default SideMenu