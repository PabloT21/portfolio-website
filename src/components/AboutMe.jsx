import React, { Component } from 'react'

import CardSection from './CardSection'

import linux from '../assets/logos/linux.png'

import docker from '../assets/logos/docker.png'

import github from '../assets/logos/github.png'

import SectionContainer from './SectionContainer'


export default class AboutMe extends Component {
  render() {
    return (
      <div>     
        <h1 className="section-title">Mi stack</h1>
        <div className='about-me'>
                <p className='basic-text'> 
                  
                </p>
                <div className='basic-box-container'>


                  <div style={{textAlign:"center"}}>
                      <img className='basic-box-img' src={linux}></img>
                  </div>

                  <div style={{textAlign:"center"}}>
                      <img className='basic-box-img' src={docker}></img>
                  </div>

                  <div style={{textAlign:"center"}}>
                      <img className='basic-box-img' src={github}></img>
                  </div>

                  
                </div>
                <br></br>
                <h1 className='section-subtitle'> Mi stack </h1>
                <br></br>
                <CardSection/>
        </div>
      </div>
    )
  }
}
