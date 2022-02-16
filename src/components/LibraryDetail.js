// import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom';

function LibraryDetail({cards}) {
  // const [card, setCard] = useState(null);
  const {name} = useParams()
  console.log(name)

  // useEffect(() => {
  //     fetch(`http://localhost:3000/cards/${value}`)
  //       .then(r => r.json())
  //       .then(data => setCard(data.card))
  // }, [value])
  
  // if (!card) return <h2>Loading...</h2>
  
  
  return (
    <div >
      {cards
      .filter((card) => card.name===name) 
      .map(card => (
      <div key={card.value}>
        <h1>{card.name}</h1>
        <img 
          src={card.image}
          alt={card.name}
          width="8%" />
        <p>{card.desc}</p>
      </div>
  ))}
   </div>
)
}

export default LibraryDetail



//this is the component that is the ID link that will display all of the detailsfor each indiviual card