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
<<<<<<< HEAD
        className={flip ? 'flip' : null}
=======
        // className={flip ? 'flip' : null}
>>>>>>> working
        src={image}
        alt={name}
        width="70%"
      />
      {toggle ? <p>{meaningUp}</p> : null}
<<<<<<< HEAD
      {toggle ? <p>{meaningRev}</p> : null}
=======
      {/* {toggle ? <p>{meaningRev}</p> : null} */}
>>>>>>> working
    </div>
  )
}

export default Cards

//on click show:  meaningUp & description