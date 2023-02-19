import React, { Component } from 'react'

import CardSection from './CardSection'

export default class AboutMe extends Component {
  render() {
    return (
      <div className='about-me'>
                <p className='basic-text'> 
                    Im Pablo Terrone, a 21 years old developer from Argentina.    
                </p>
                <h1 className='section-title'> Lenguajes </h1>
                <CardSection/>
      </div>

    )
  }
}
