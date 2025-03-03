import { display } from '@mui/system'
import React, { Component } from 'react'
import presentationPic from '../assets/presentation.png'


export default class Inicio extends Component {
  render() {
    return (
        <div className='banner' >
          <div style={{display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}}>  
            <div>
              <h1  id="header-title"> Pablo Terrone</h1>
              <div style={{margin: 0, marginBottom: "80px"}} className="typewriter">
                <h2 id='header-subtitle'>Desarrollador web Fullstack</h2>
              </div> 
            </div>
            <div>
              <div className="two-columns container">
                <div className="column1">
                <img id='presentation-image' src={presentationPic}></img>
                </div>
                <div className="column2">
                  <span className='text-block'>
                    <p className='basic-text'>Hola! Soy Pablo Terrone &#x1F1E6;&#x1F1F7; &#129481; </p>
                    <p className='basic-text'>Desde el año 2020 trabajo como desarrollador web Full Stack</p>

                    <button id='main-button'>Descargar CV</button>
                  </span>
                  
                </div>
              </div>
            </div> 
            
                
          </div>
          
          </div>
    )
  }
}
