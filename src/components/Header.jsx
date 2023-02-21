import { display } from '@mui/system'
import React, { Component } from 'react'


export default class Header extends Component {
  render() {
    return (
        <div style={{display: "grid", justifyContent: "center"}} >

          <h1 id="header-title"> Pablo Terrone</h1>
          <div style={{display: "flex", justifyContent: "center", width: "fit-content", margin: "auto"}} className="typewriter">
            <h1>"Desarrollador web Fullstack"</h1>
          </div>
          </div>
    )
  }
}
