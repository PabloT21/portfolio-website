import React, { Component } from 'react'


const sectionContainer = ( { children,title } ) =>{
    return (
        <div className='section-box'>
            <div className='section-text'>
                <h1 className='section-title'> {title} </h1>
                </div>
                <br></br>    
                {children}
            
        </div>
    );
  
};

export default sectionContainer;
