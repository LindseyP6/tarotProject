import React, {useState} from 'react';
import MoreButton from "./MoreButton";
import Cards from './Cards';

function CardContainer({cards}) {
  const [index, setIndex] = useState(0)
  
  const randomCards = cards.sort(() => Math.random() - .5);
  const cardsList = randomCards
      .slice(index, index + 5)
      .map(card => { 
        let random = Math.floor(Math.random() * 2);
        if (random) {
          return <Cards 
          key={card.id} 
          name={card.name}
          image={card.image}
          meaningUp={card.meaningUp}
          meaningRev={card.meaningRev}
          flip={false}
          />
        }else{
          return <Cards 
          key={card.id} 
          name={card.name}
          image={card.image}
          meaningUp={card.meaningUp}
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
    <div>
       <MoreButton onClickMore = {handleAddCards}/>
       <div className="cards-list">{cardsList}</div>
      </div>
  )
}

export default CardContainer;