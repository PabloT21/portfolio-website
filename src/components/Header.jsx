import React, { Component } from 'react'


export default class Header extends Component {
  render() {
    return (
        <div >
          <h1 id="header-title"> Pablo Terrone</h1>
          <div className='writing-container'>
            <h2 id="header-subtitle"> Desarrollador web FullStack
              <span id='writing-machine'>&#160;
              </span>
            </h2>
          </div>
        </div>
    )
  }
}
