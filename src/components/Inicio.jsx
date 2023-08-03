import { display } from '@mui/system'
import React, { Component } from 'react'


export default class Inicio extends Component {
  render() {
    return (
        <div className='banner' style={{height:"80vh"}} >
          <div style={{display:"flex",alignItems:"center", justifyContent:"center", flexDirection:"column"}}>  
            <h1 style={{}} id="header-title"> Pablo Terrone</h1>
            <div style={{margin: 0}} className="typewriter">
              <h1>"Desarrollador web Fullstack"</h1>
            </div>  
          </div>
          
          </div>
    )
  }
}
