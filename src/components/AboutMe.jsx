import React, { Component } from 'react'
import illustration from '../assets/cartoonIllustration.png'

export default class AboutMe extends Component {
  render() {
    return (
        <div className='aboutMe-box'>
            <img src={illustration}></img>
            <div className='aboutMe-text'>
                <h1> About me </h1>
                <p> 
                    Im Pablo Terrone, a  21 years old developer from Argentina.    
                </p>
            </div>
        </div>
    )
  }
}
