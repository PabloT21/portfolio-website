import React from 'react'

import Card from './Card'


// Import de Logos 

import phpLogo from '../assets/logos/PHP.png'
import reactLogo from '../assets/logos/react.svg.png'
import rails from '../assets/logos/rails.png'
import laravel from '../assets/logos/laravel.png'

import express from '../assets/logos/express.png'
import tailwind from '../assets/logos/tailwind.png'
import java from '../assets/logos/java.png'
import wordpress from '../assets/logos/wordpress.png'
import python from '../assets/logos/python.png'

import mysql from '../assets/logos/mysql.png'
import mongo from '../assets/logos/mongo.png'
import postgres from '../assets/logos/postgres.svg'








const CardSection = () => {


  return (
    <div className='cards-container'>
            <Card 
              icon={phpLogo}
              color="#4f5b93"
              title="PHP"
              xp="3"
              text="Es mi lenguaje de preferencia para desarrollos Backend, además, es el que mas utilizo en mi trabajo." 
            />

            <Card
              icon={reactLogo}
              color="black"
              title="React"
              xp="3"
              text="Es mi lenguaje de preferencia para desarrollos Backend, además, es el que mas utilizo en mi trabajo." 
            />

            <Card
            icon={rails}
            color="white"
            title="Ruby on Rails"
            xp="2"
            text="Es mi lenguaje de preferencia para desarrollos Backend, además, es el que mas utilizo en mi trabajo." 
            />

          <Card
            icon={laravel}
            color="white"
            title="Laravel"
            xp="1.5"
            text="Es mi lenguaje de preferencia para desarrollos Backend, además, es el que mas utilizo en mi trabajo." 
            />

          <Card
            icon={tailwind}
            color="white"
            title="Tailwind CSS"
            xp="3"
            text="Es mi lenguaje de preferencia para desarrollos Backend, además, es el que mas utilizo en mi trabajo." 
            />


          <Card
            icon={express}
            color="#F7DF1E"
            title="Express JS"
            xp="3"
            text="Es mi lenguaje de preferencia para desarrollos Backend, además, es el que mas utilizo en mi trabajo." 
            />


          <Card
            icon={java }
            color="white"
            title="Java"
            xp="3"
            text="Es mi lenguaje de preferencia para desarrollos Backend, además, es el que mas utilizo en mi trabajo." 
            />


          <Card
            icon={wordpress }
            color="white"
            title="Wordpress (Plugins Dev)"
            xp="3"
            text="Es mi lenguaje de preferencia para desarrollos Backend, además, es el que mas utilizo en mi trabajo." 
            />

          <Card
            icon={python }
            color="#357AE9"
            title="Python"
            xp="3"
            text="Es mi lenguaje de preferencia para desarrollos Backend, además, es el que mas utilizo en mi trabajo." 
            />


      <Card
            icon={mysql }
            color="white"
            title="MySQL"
            xp="3"
            text="Es mi lenguaje de preferencia para desarrollos Backend, además, es el que mas utilizo en mi trabajo." 
            />


            <Card
              icon={mongo }
              color="white"
              title="MongoDB"
              xp='3'
              text="Es mi lenguaje de preferencia para desarrollos Backend, además, es el que mas utilizo en mi trabajo." 
            />


<Card
            icon={postgres }
            color="white"
            title="Postgres"
            xp="3"
            text="Es mi lenguaje de preferencia para desarrollos Backend, además, es el que mas utilizo en mi trabajo." 
            />



        </div>
  )
}

export default CardSection