import React, {useEffect, useState} from 'react';
import Library from './Library';
import Cards from './Cards';


function CardContainer() {
  const [cards, setCards] = useState([])
  const [index, setIndex] = useState(0)

  useEffect(()=>{
    fetch("http://localhost:4000/cards")
    .then(r=>r.json())
    .then(setCards => cards.slice(index, index + 4)
    .map(card=> <Cards key={card.value} name={card.name}/>)
    )
  }, [])

  return (
    <div>
      <Library cards={cards} />
       
      Container</div>
  )
}

export default CardContainer;