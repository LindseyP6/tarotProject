import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom';

function LibraryDetail({cards}) {
  const [card, setCard] = useState(null);
  const {id} = useParams()
  console.log(id)

  useEffect(() => {
      fetch(`http://localhost:3000/cards/${id}`)
        .then(r => r.json())
        .then(cards => setCard(cards.card))
  }, [id])
  
  // if (!card) return <h2>Loading...</h2>
  
  const oneCard = cards
  .filter((card) => card.name === name) 
  .map(card => (
  <div key={card.id}>
    <h1>{card.name}</h1>
    <img src={card.image} alt={card.name}/>
    <p>{card.desc}</p>
  </div>
))

  return (
    <div>
      {oneCard}
   </div>
)
}




export default LibraryDetail



//this is the component that is the ID link that will display all of the detailsfor each indiviual card