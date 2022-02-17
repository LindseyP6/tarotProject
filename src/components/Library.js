import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import CardForm from "./CardForm"

function Library({cards, searchTerm, onSetSearchTerm, onAddCard}) {
  const [showForm, setShowForm] = useState(false);

  // if (!cards) return <h2>Loading...</h2>
  
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
    <div class="searchAdd">
      <div className="searchbar">
        <label htmlFor="search"><strong>Search Cards </strong></label>
      <input
        type="text"
        placeholder="Type a name to search..."
        value={searchTerm}
        onChange={(e) => onSetSearchTerm(e.target.value)}
      />
<<<<<<< HEAD
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Tarot Card</button>
      </div>
      {showForm ? <CardForm onAddCard={onAddCard}/> : null}
    </div>
=======
      <button style={{height:"28px", padding:"-10px", margin:"2px"}}onClick={handleClick}><strong>Add a Tarot Card</strong></button>
      </div>
      {showForm ? <CardForm onAddCard={onAddCard}/> : null}
>>>>>>> working
      {showCards}
    </div>
  )
}

export default Library;
