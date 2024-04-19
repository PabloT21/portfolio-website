import { display } from '@mui/system'
import React, { Component } from 'react'
import presentationPic from '../assets/presentation.png'


export default class Inicio extends Component {
  render() {
    return (
        <div className='banner' style={{height:"80vh"}} >
          <div style={{display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}}>  
            <h1  id="header-title"> Pablo Terrone</h1>
            <div style={{margin: 0, marginBottom: "80px"}} className="typewriter">
              <h1>"Desarrollador web Fullstack"</h1>

            </div>  
            <br></br>
            <div className="two-columns">
              <img id='presentation-image' src={presentationPic}></img>
              <p className='basic-text'>Hola! Soy Pablo, un desarrollador fullstack de Argentina.</p>
            </div>
            <br></br>
                <button style={{width: "200px"}}>Descargar CV</button>
          </div>
          
          </div>
    )
  }
}
