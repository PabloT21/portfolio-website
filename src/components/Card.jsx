import React from 'react'



const Card = ({icon,color,title,text,xp}) => {

  const renderSwitch =(param) => {
    console.log(param)
    switch(param) {
      case 1:
        return 'red';
      case 1.5:
        return "orange" 
      case 2:
        return 'green';
      case 2.5:
        return 'green';
      case 3:
        return 'green';
      default:
        return "none";
    }
  }

  return (
    <div className='card-display'>
          <h2 className='card-title'>{title}</h2>

    <div className='card' style={{backgroundColor: color}}>
        <img className='card-icon' src={icon}></img>

    </div>
        <div className='card-level' style={{ backgroundColor: renderSwitch(parseInt(xp))}}>
          <p className="card-text"><span class="card-text" style={{fontWeight: "bold", fontSize: "18px", color: "white" }}>{xp} años de experiencia </span></p>
        </div>
    <p class="card-text"> {text} </p>

    </div>

  )
}

export default Card