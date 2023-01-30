import React from 'react'
import illustration from '../assets/cartoonIllustration1.png'

import spanish from '../assets/spanish.webp'
import english from '../assets/english.webp'


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

        <img className='char-img' src={illustration}></img>
        <div className='navMenu-item'>
            <a href="">
                <div className='navMenu-icon'>
                    <PersonIcon style={{ color: "white" }}  fontSize="large"></PersonIcon>
                </div>
                <h1 className='navMenu-text'>Sobre mí</h1>
            </a>    
        </div>

        <div className='navMenu-item'>
            <a href="">
                <div className='navMenu-icon'>
                    <WorkIcon  style={{ color: "white" }} fontSize="large"></WorkIcon>
                </div>
                <h1 className='navMenu-text'>Experiencia</h1>
            </a>
        </div>


        <div className='navMenu-item'>
            <a href="">
                <div className='navMenu-icon'>
                    <SchoolIcon  style={{ color: "white" }} fontSize="large"></SchoolIcon>
                </div>
                <h1 className='navMenu-text'>Estudios</h1>
            </a>
        </div>

        <div className='navMenu-item'>
          <a href="">
            <div className='navMenu-icon'>
                <MailIcon  style={{ color: "white" }} fontSize="large"></MailIcon>
            </div>
                <h1 className='navMenu-text'>Contacto</h1>
            </a>
        </div>

    </div>
  )
}

export default SideMenu