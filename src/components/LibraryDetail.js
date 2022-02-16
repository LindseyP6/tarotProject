import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom';

function LibraryDetail() {
  const [card, setCard] = useState([]);
  const {id} = useParams()
  console.log(id)

  useEffect(() => {
      fetch(`http://localhost:3000/cards/${id}`)
        .then(r => r.json())
        .then(card =>setCard(card));
  }, [id])

  console.log(card)
  
  if (!card) return <h2>Loading...</h2>

// const oneCard = cards
  // .filter((card) => card.name === name)
  // .map(card => (
  // <div key={card.id}>
  //   <h1>{card.name}</h1>
  //   <img src={card.image} alt={card.name}/>
  //   <p>{card.desc}</p>
  // </div>

  return (
    <div>
      <img src={`../${card.image}`} alt={card.name}/>
      <p>{card.desc}</p>
   </div>
  )
}


export default LibraryDetail
