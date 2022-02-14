import React, {useEffect, useState} from 'react';
import { Route, Switch } from "react-router-dom";
import CardContainer from './CardContainer';
import Library from './Library';
import NavBar from './NavBar';
import '../App.css';

function App() {
  const [cards, setCards] = useState([])
  
  useEffect(()=>{
    fetch("http://localhost:4000/cards")
    .then(r=>r.json())
    .then(setCards)
  }, [])

  const showCards = cards.map(card => (
    <img alt={card.name}
    width="7%" key={card.value} src={card.image}/>
  ))


  return (
    <div>
      <NavBar />
      <h2><i style={{color: "yellow"}}>Enjoy 3 FREE readings + 70% off your first session!</i></h2>
      <Switch>
        <Route path="/readings">
         <CardContainer cards={cards}/>
        </Route>
        <Route path="/library">
         <Library showCards={showCards} />
        </Route>
        <Route path="/">
          {/* Form */}
        </Route>
       </Switch>
       
    </div>
  )
}

export default App;
