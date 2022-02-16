import React, {useState, useEffect} from 'react'
import {useParams, useRouteMatch} from 'react-router-dom';

function LibraryDetail() {
  const [card, setCard] = useState(null)

  const {value} = useParams;

  useEffect(() => {
      fetch(`http://localhost:3000/cards/${value}`)
      .then((r) => r.json())
      .then(console.log(card))
        // setIsLoaded(card) => {
        //  setCard(card);
          // setIsLoaded(true);
      // });
  }, [value]);

  console.log(card)
       
  return (
    <div>LibraryDetail
      {/* <p>{value}</p> */}
    </div>
  )
}

export default LibraryDetail



//this is the component that is the ID link that will display all of the detailsfor each indiviual card