import React, {useEffect, useState} from 'react';
import CardContainer from './CardContainer';
// import Library from './Library';

import '../App.css';

function App() {
  const [cards, setCards] = useState([])
  
  useEffect(()=>{
    fetch("http://localhost:4000/cards")
    .then(r=>r.json())
    .then(setCards)
  }, [])


  return (
    <div className="App">
      {/* <Library cards={cards}/> */}
      <CardContainer cards={cards}/>
      App
    </div>
  )
}

export default App;
