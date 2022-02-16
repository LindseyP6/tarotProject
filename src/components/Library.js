import React from 'react';
import {Link} from 'react-router-dom';

function Library({cards, searchTerm, onSetSearchTerm}) {
  
  if (!cards) return <h2>Loading...</h2>
  
  const showCards = cards.map(card => (
    <Link to key={card.value}
     to={`/library/${card.name}`}>  
      <img 
        key={card.value}
        src={card.image}
        name={card.name}
        alt={card.name}
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
