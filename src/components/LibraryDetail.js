import React, {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom';

function LibraryDetail() {
  const [card, setCard] = useState([]);
  const {id} = useParams()
  
  useEffect(() => {
    fetch(`http://localhost:3000/cards/${id}`)
        .then(r => r.json())
        .then(card =>setCard(card));
      }, [id])
  if (!card) return <h2>Loading...</h2> 

  return (
    <div className="libraryCard">
      <img src={`../${card.image}`} alt={card.name}/>

      <Link to={`/library/${card.id - 1}`}>
        <button style={{"marginRight": "10px"}}>Prior Card    </button>
        </Link> 
      <Link to={`/library/${card.id + 1}`}><button>Next Card</button></Link> 

      <div className="libraryDescription">
      <h4>Name:</h4>
      <p>{card.name}</p>
        <hr/>
      <h4>Type:</h4>
      <p>{card.type}</p>
        <hr/>
      <h4>Meaning Up:</h4>
      <p>{card.meaningUp}</p>
        <hr/>
      <h4>Meaning Reversed:</h4>
      <p>{card.meaningRev}</p>
        <hr/>
      <h4>Description:</h4>
      <p>{card.desc}</p>
      </div>

   </div>
  )
}


export default LibraryDetail
