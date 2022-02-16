import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import CardForm from "./CardForm"

function Library({cards, searchTerm, onSetSearchTerm, onAddCard}) {
  const [showForm, setShowForm] = useState(false);

  // if (!cards) return <h2>Loading...</h2>
  
  const showCards = cards.map(card => (
<<<<<<< HEAD
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
=======
    <Link to key={card.id}
     to={`/library/${card.id}`}>  
      <img 
        key={card.id}
        src={card.image}
        name={card.name}
        alt={card.name}
        width="8%" />
    </Link>
>>>>>>> working
  )) 

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  return (
    <div>
      <div className="searchbar">
        <label htmlFor="search">Search Cards:</label>
      <input
        type="text"
        placeholder="Type a name to search..."
        value={searchTerm}
        onChange={(e) => onSetSearchTerm(e.target.value)}
      />
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Tarot Card</button>
      </div>
      {showForm ? <CardForm onAddCard={onAddCard}/> : null}
    </div>
      {showCards}
    </div>
  )
}

export default Library;
