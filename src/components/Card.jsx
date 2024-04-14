import React from 'react'



const Card = ({icon,color,title,text,xp}) => {

  const renderSwitch =(param) => {
    console.log(param)
    switch(param) {
      case 1:
        return {"color": '#007fff', "level": "Principiante"};
      case 2:
        return {"color": '#FF980E', "level": "Intermedio"};
      case 3:
        return {"color": '#ADFF2F', "level": "Avanzado"};
      default:
        return {"color": 'red', "level": "Principiante"};
    }
  }

  const levelData = renderSwitch(parseInt(xp));

  return (
    <div className='card-display'>
          <h2 className='card-title'>{title}</h2>

    <div className='card' style={{backgroundColor: color}}>
        <img className='card-icon' src={icon}></img>

    </div>
        <div className='card-level' style={{   }}>
          <p className="card-text" style={{ fontWeight: "bold"}}> Nivel: <span className="card-text" style={{fontWeight: "bold", fontSize: "18px", color: levelData["color"] }}> {levelData["level"]} </span></p>
        </div>

    </div>

  )
}

export default Card