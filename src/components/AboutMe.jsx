import React, { Component } from 'react'

import CardSection from './CardSection'

import linux from '../assets/logos/linux.png'

import docker from '../assets/logos/docker.png'

import github from '../assets/logos/github.png'


export default class AboutMe extends Component {
  render() {
    return (
      <div className='about-me'>
                <p className='basic-text'> 
                  Soy Pablo Terrone, tengo 21 años y soy un desarrollador web de Argentina.
                </p>
                <div className='basic-box-container'>
                    <div className='basic-box'>
                      <h2 className='basic-title'>Sistema operativo</h2>
                      <p style={{textAlign:"justify"}}> Utilizo Ubuntu desde 2020, es mi SO preferido a la hora de desarrollar un sitio web o aplicación</p>
                      <img className='basic-box-img' src={linux}></img>
                    </div>

                    <div className='basic-box'>
                      <h2 className='basic-title'>Entornos</h2>
                      <p style={{color: "black"}}> Para armar mis entornos locales o de producción utilizo Docker, ya que resulta eficiente por su virtualización, es fácil de mantener y actualizar, entre otras cosas.</p>
                      <img className='basic-box-img' src={docker}></img>
                    </div>

                    <div className='basic-box'>
                      <h2 className='basic-title'>Versionado de código</h2>
                      <p style={{color: "black"}}> Para armar mis entornos locales o de producción utilizo Docker, ya que resulta eficiente por su virtualización, es fácil de mantener y actualizar, entre otras cosas.</p>
                      <img className='basic-box-img' src={github}></img>
                    </div>

                </div>
                <br></br>
                <h1 className='section-title'> Mi stack </h1>
                <br></br>
                <CardSection/>
      </div>

    )
  }
}
