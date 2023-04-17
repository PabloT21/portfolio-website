import React, { Component } from 'react'

import CardSection from './CardSection'

import linux from '../assets/logos/linux.png'

import docker from '../assets/logos/docker.png'

import github from '../assets/logos/github.png'


export default class AboutMe extends Component {
  render() {
    return (
      <div className='about-me' style={{marginTop:"0px"}}>
                <p className='basic-text'> 
                  Soy Pablo Terrone, tengo 21 años y soy un desarrollador web de Argentina.
                </p>
                <div className='basic-box-container'>


                  <div style={{textAlign:"center"}}>
                    <div className='basic-box'>
                      <img className='basic-box-img' src={linux}></img>
                    </div>
                    <h2 className='basic-title' style={{color:"white"}}>Sistema operativo</h2>
                  </div>

                  <div style={{textAlign:"center"}}>
                    <div className='basic-box'>
                      <img className='basic-box-img' src={docker}></img>
                    </div>
                    <h2 className='basic-title' style={{color:"white"}}>Entornos virtuales</h2>
                  </div>

                  <div style={{textAlign:"center"}}>
                    <div className='basic-box'>
                      <img className='basic-box-img' src={github}></img>
                    </div>
                    <h2 className='basic-title' style={{color:"white"}}>Versionado de código</h2>
                  </div>

                  
                </div>
                <br></br>
                <h1 className='section-subtitle'> Mi stack </h1>
                <br></br>
                <CardSection/>
      </div>

    )
  }
}
