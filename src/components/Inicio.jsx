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
                <h2>Desarrollador web Fullstack</h2>
              </div> 
            </div>
            <div>
              <div className="two-columns container">
                <div className="column1">
                <img id='presentation-image' src={presentationPic}></img>
                </div>
                <div className="column2">
                  <span>
                    <p className='basic-text'>Hola! Soy Pablo &#x1F1E6;&#x1F1F7; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum turpis vel mauris vestibulum, non dictum quam placerat. Maecenas condimentum urna eget eros congue, eget consequat libero vehicula. Duis ac massa nec odio lacinia interdum. Nulla facilisi. Maecenas nec tempor mauris. Suspendisse potenti. Nullam in ante eget felis sagittis eleifend non ac lectus. Quisque fermentum vulputate ipsum, sit amet accumsan velit. Morbi sodales, dui vitae lacinia vestibulum, urna mauris tincidunt tortor, ac rhoncus est justo nec risus</p>
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
