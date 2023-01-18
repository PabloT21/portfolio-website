import React, { Component } from 'react'
import illustration from '../assets/cartoonIllustration.png'

export default class AboutMe extends Component {
  render() {
    return (
        <div className='aboutBox'>
            <img src={illustration}></img>
            <div className='aboutText'>
                <h1> About me </h1>
                <p> 
                    Im Pablo Terrone, a developer from Argentina.    
                </p>
            </div>
        </div>
    )
  }
}
