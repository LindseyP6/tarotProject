import React, {useState} from 'react'

function Cards({name, image, meaningUp}) {
  const [toggle, setToggle] = useState(false)

  function handleToggleDetails() {
    console.log('click')
    setToggle(toggle => !toggle)
  }

  return (
    <div 
      className="reading-cards"
      onClick={handleToggleDetails}
      >
      <h4>{name} </h4>
      <img
        src={image}
        alt={name}
        width="70%"
      />

      {toggle ? <p>{meaningUp}</p> : null}
    </div>
  )
}

export default Cards

//on click show:  meaningUp & description