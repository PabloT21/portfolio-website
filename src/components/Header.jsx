import React, { Component } from 'react'
import NavMenu from './NavMenu'


export default class Header extends Component {
  render() {
    return (
        <div className='header'>
            <NavMenu></NavMenu>
        </div>
    )
  }
}
