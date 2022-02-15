import React, {useState, useEffect} from 'react';
import {Link, Route, useParams} from 'react-router-dom';

function Library({cards}) {

  
  const showCards = cards.map(card => (
      <Link key={card.key}
        to={`/library/{card.value}`}
      >       
        <img 
          alt={card.name}
          key={card.value} 
          src={card.image}
          name={card.name}
          width="8%" />
      </Link>
  )) 

  return (
    <div>
{showCards}

    </div>
  )
}

export default Library;
