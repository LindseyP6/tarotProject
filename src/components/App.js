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
    return card.name.toLowerCase().includes(searchTerm.toLowerCase())
    || card.desc.toLowerCase().includes(searchTerm.toLowerCase());
  });

  function handleAddCard(newCard) {
    setCards([...searchCards, newCard]);
  }

  return (
    <div>
      <NavBar />
  
      <Switch>
        <Route exact path="/readings">
         <CardContainer cards={searchCards}/>
        </Route>

        <Route exact path="/library/:id">
          <LibraryDetail />
        </Route> 

        <Route exact path="/library">
         <Library 
          cards={searchCards} 
          searchTerm={searchTerm} 
          onSetSearchTerm={setSearchTerm}
          onAddCard={handleAddCard}
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
