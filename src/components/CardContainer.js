import React, {useState} from 'react';
import MoreButton from "./MoreButton";
import Cards from './Cards';

function CardContainer({cards}) {
  const [index, setIndex] = useState(0)
  
  const randomCards = cards.sort(() => Math.random() - 0.5);
// console.log(randomCards)

  const cardsList = randomCards
      .slice(index, index + 5)
      .map(card => (
        <Cards 
        key={card.value} 
        name={card.name}
        image={card.image}
        meaningUp={card.meaningUp}
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