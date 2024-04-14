import { display } from '@mui/system'
import React, { Component } from 'react'
import cartoonImg1 from '../assets/cartoonIllustration1.png'


export default class Inicio extends Component {
  render() {
    return (
        <div className='banner' style={{height:"80vh"}} >
          <div style={{display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}}>  
            <h1 style={{}} id="header-title"> Pablo Terrone</h1>
            <div style={{margin: 0, marginBottom: "80px"}} className="typewriter">
              <h1>"Desarrollador web Fullstack"</h1>

            </div>  
            <div className="two-columns">
              <img className='cartoon-image' src={cartoonImg1}></img>
              <p className='basic-text'>Hola! Soy Pablo, un desarrollador fullstack de Argentina.</p>
            </div>

          </div>
          
          </div>
    )
  }
}
