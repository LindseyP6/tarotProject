import React from 'react'

function Cards({name, image}) {
  return (
    <div className="reading-cards">
      <h4>{name} </h4>
      <img
        src={image}
        alt={name}
        width="70%"
      />
    </div>
  )
}

export default Cards