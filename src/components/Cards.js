import React, {useState} from 'react'

function Cards({flip, name, image, meaningUp, meaningRev}) {
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
        className={flip ? 'flip' : null}
        src={image}
        alt={name}
        width="70%"
      />
      {toggle ? 
      <>
      <p> <strong>Meaning Up: </strong> {meaningUp}</p>
      <br/>
      <p><strong>Meaning Reversed: </strong>{meaningRev} </p>
      </>
   : null}
    </div>
  )
}

export default Cards
