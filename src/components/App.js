import React, {useEffect, useState} from 'react';
import { Route, Switch } from "react-router-dom";
import CardContainer from './CardContainer';
import Library from './Library';
import NavBar from './NavBar';
import '../App.css';

function App() {
  const [cards, setCards] = useState([])
  
  useEffect(()=>{
    fetch("http://localhost:3000/cards")
    .then(r=>r.json())
    .then(setCards)
  }, [])

  return (
    <div>
      <NavBar />
      <h2><i>Enjoy 3 FREE readings + 70% off your first session!</i></h2>
      <Switch>
        <Route exact path="/readings">
         <CardContainer cards={cards}/>
        </Route>
        <Route exact path="/library">
         <Library cards={cards} />
        </Route>
        <Route path="/">
        </Route>
       </Switch>
       
    </div>
  )
}

export default App;
