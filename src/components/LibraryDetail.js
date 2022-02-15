import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom';

function LibraryDetail() {
    const [card, setCard] = useState(null)

    const [isLoaded, setIsLoaded] = useState(false)

    const {value} = useParams;
    
    useEffect(() => {
        fetch(`http://localhost:3000/projects/${value}`)
        .then((r) => r.json())
        .then((card) => {
            setCard(card);
            setIsLoaded(true);
        });
    }, [value]);
    
    if (!isLoaded) return <h4>Loading...</h4>;
       
  return (
    <div>LibraryDetail</div>
  )
}

export default LibraryDetail



//this is the component that is the ID link that will display all of the detailsfor each indiviual card