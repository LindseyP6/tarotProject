import React, {useState, useEffect} from 'react';
import {Link, Route, useParams} from 'react-router-dom';

function Library({cards, searchTerm, onSetSearchTerm}) {

  
  const showCards = cards.map(card => (
      <Link key={card.name}
        to={`/library/:value`}
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
      <div className="searchbar">
        <label htmlFor="search">Search Cards:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchTerm}
        onChange={(e) => onSetSearchTerm(e.target.value)}
      />
    </div>
{showCards}

    </div>
  )
}

export default Library;
