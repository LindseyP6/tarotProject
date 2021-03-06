import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import CardForm from "./CardForm"

function Library({cards, searchTerm, onSetSearchTerm, onAddCard}) {
  const [showForm, setShowForm] = useState(false);
  
  const showCards = cards.map(card => (
    <Link to key={card.id}
     to={`/library/${card.id}`}>  
      <img 
        key={card.id}
        src={card.image}
        name={card.name}
        alt={card.name}
        width="8%" />
    </Link>
  )) 

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  return (
    <div className="searchAdd">
      <div className="searchbar">
        <label htmlFor="search"><strong>Search Cards </strong></label>
      <input
        type="text"
        placeholder="type name / description"
        value={searchTerm}
        className="input-text"
        onChange={(e) => onSetSearchTerm(e.target.value)}
      />
      <br></br>
      </div>
      <button 
        onClick={handleClick}><strong>Add Your Own Tarot Card</strong></button>
      <br></br>
      {showForm ? <CardForm onAddCard={onAddCard}/> : null}
      {showCards}
    </div>
  )
}

export default Library;
