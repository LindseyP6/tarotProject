import React, {useEffect, useState} from 'react';
import { Route, Switch,} from "react-router-dom";
import CardContainer from './CardContainer';
import Library from './Library';
import NavBar from './NavBar';
import Login from './Login';
import LibraryDetail from './LibraryDetail';
import '../App.css';

function App() {
  const [cards, setCards] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  

  useEffect(()=>{
    fetch("http://localhost:3000/cards")
    .then(r=>r.json())
    .then(setCards)
  }, [])

  const searchCards = cards.filter((card) => {
    return card.name && card.desc && card.meaningUp.toLowerCase().includes(searchTerm.toLowerCase());
  });

  
  return (
    <div>
      <NavBar />
      {/* <h2>Enjoy 3 FREE readings + 70% off your first session!</h2> */}
      <Switch>
        <Route exact path="/readings">
         <CardContainer cards={cards}/>
        </Route>

        <Route path="/library/:name">
          <LibraryDetail cards={cards} />
        </Route> 

        <Route exact path="/library">
         <Library 
          cards={searchCards} 
          searchTerm={searchTerm} 
          onSetSearchTerm={setSearchTerm}
        />
        </Route>

        <Route exact path="/">
         <Login />
        </Route>

        <Route path="*">
          <h1>404 not found</h1>
        </Route>

       </Switch>
       
    </div>
  )
}

export default App;
