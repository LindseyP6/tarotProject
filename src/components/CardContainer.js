import React, {useState} from 'react';
import MoreButton from "./MoreButton";
import Cards from './Cards';

function CardContainer({cards}) {
  const [index, setIndex] = useState(0)
  
  const cardsList = cards
      .slice(index, index + 5)
      .map(card => (
        <Cards 
        key={card.value} 
        name={card.name}
        image={card.image}
        />
      ))

  function handleAddCards(){
    setIndex(index => (index + 3) % cards.length)
  }

  return (
    <div className="cards-list">
       {cardsList}
       <MoreButton onClickMore = {handleAddCards}/>
      </div>
  )
}

export default CardContainer;