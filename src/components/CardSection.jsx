import React from 'react'

import phpLogo from '../assets/logos/PHP.png'

import Card from './Card'


const CardSection = () => {


  return (
    <div className='cards-container'>
            <Card 
              icon={phpLogo}
              color="#4f5b93"
              title="php"
              xp="3"
              text="Es mi lenguaje de preferencia para desarrollos Backend, además, es el que mas utilizo en mi trabajo." 
            />
            <Card></Card>
            <Card></Card>
            <Card></Card>

        </div>
  )
}

export default CardSection