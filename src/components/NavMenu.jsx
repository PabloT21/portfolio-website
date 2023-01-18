import React, { Component } from 'react'

// Icons
import MailIcon from '@mui/icons-material/Mail';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';

export default class NavMenu extends Component {
  render() {
    return (
      <div className='navMenu-container'>
        
        <div className='navMenu-item'>
            <PersonIcon color="primary" fontSize="large"></PersonIcon>
            <h1>Contact</h1>
        </div>

        <div className='navMenu-item'>
            <WorkIcon color="primary" fontSize="large"></WorkIcon>
            <h1>Contact</h1>
        </div>

        <div className='navMenu-item'>
            <SchoolIcon color="primary" fontSize="large"></SchoolIcon>
            <h1>Contact</h1>
        </div>

        <div className='navMenu-item'>
            <MailIcon color="primary" fontSize="large"></MailIcon>
            <h1>Contact</h1>
        </div>


      </div>
    )
  }
}
