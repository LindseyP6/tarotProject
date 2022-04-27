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
      <h3>{name} </h3>
      <img
        className={flip ? 'flip' : null}
        src={image}
        alt={name}
        width="70%"
      />
      {toggle ? 
      <>
      <h3>Meaning Up: </h3> <p> {meaningUp}</p>
      <br/>
      <h3>Meaning Reversed: </h3><p>{meaningRev} </p>
      </>
   : null}
    </div>
  )
}

export default Cards
