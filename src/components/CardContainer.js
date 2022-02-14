import React, {useState} from 'react';
import MoreButton from "./MoreButton";
import Cards from './Cards';

function CardContainer({cards}) {
  const [index, setIndex] = useState(0)
  
  const cardsList = cards
      .slice(index, index + 3)
      .map(card => (
        <Cards 
        key={card.id} 
        name={card.name}
        image={card.image}
        />
      ))

  function handleAddCards(){
    setIndex(index => (index + 1))
  }

  return (
    <div className="cards-list">
       {cardsList}
       <MoreButton onClickMore = {handleAddCards}/>
      Container
      </div>
  )
}

export default CardContainer;