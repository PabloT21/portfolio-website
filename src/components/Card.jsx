import React from 'react'



const Card = ({icon,color,title,text,xp}) => {
  console.log(color);

  return (
    <div className='card-display'>
    <div className='card' style={{backgroundColor: color}}>
    <h2 className='card-title'>{title}</h2>
<curso
        <img className='card-icon' src={icon}></img>
        <p class="card-text"><span class="card-text" style={{fontWeight: "bold"}}>{xp}</span> años de experiencia</p>
        <div className='card-level'>
        </div>
    </div>
    <p class="card-text"> {text}  </p>

    </div>

  )
}

export default Card