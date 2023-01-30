import React from 'react'
import illustration from '../assets/cartoonIllustration1.png'


import MailIcon from '@mui/icons-material/Mail';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';

const SideMenu = () => {
  return (
    <div className="sidenav">
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