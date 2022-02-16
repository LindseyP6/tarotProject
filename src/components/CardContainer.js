import React, {useState} from 'react';
import MoreButton from "./MoreButton";
import Cards from './Cards';

function CardContainer({cards}) {
  const [index, setIndex] = useState(0)
  
  const randomCards = cards.sort(() => Math.random() - 0.5);

  const cardsList = randomCards
      .slice(index, index + 5)
      .map(card => {
        // random logic that returns 1 or 0
        let random = Math.floor(Math.random() * 2);

        if (random) {
          <Cards 
          key={card.id} 
          name={card.name}
          image={card.image}
          meaningUp={card.meaningUp}
          />
        }else{
          <Cards 
          key={card.id} 
          name={card.name}
          image={card.image}
          meaningRev={card.meaningRev}
          flip={true}
          />
        }
       
      }
    )

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