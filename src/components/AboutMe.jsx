import React, { Component } from 'react'

import CardSection from './CardSection'

import linux from '../assets/logos/linux.png'

import docker from '../assets/logos/docker.png'


export default class AboutMe extends Component {
  render() {
    return (
      <div className='about-me'>
                <p className='basic-text'> 
                    Im Pablo Terrone, a 21 years old developer from Argentina.    
                </p>
                <div className='basic-box-container'>
                    <div className='basic-box'>
                      <h2 className='basic-title'>Sistema operativo</h2>
                      <p style={{color: "white"}}> Utilizo Linux (Ubuntu) desde 2020, es mi SO preferido a la hora de desarrollar un sitio web o aplicación</p>
                      <img className='basic-box-img' src={linux}></img>
                    </div>

                    <div className='basic-box'>
                      <h2 className='basic-title'>Entornos</h2>
                      <p style={{color: "white"}}> Para armar mis entornos locales o de producción utilizo Docker, ya que resulta eficiente por su virtualización, es fácil de mantener y actualizar, entre otras cosas.</p>
                      <img className='basic-box-img' src={docker}></img>
                    </div>

                </div>
                <h1 className='section-title'> Mi stack </h1>
                <CardSection/>
      </div>

    )
  }
}
