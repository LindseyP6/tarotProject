import React, {useState} from 'react';
import {Link} from 'react-router-dom';

function Library({cards}) {
  // const [isLoaded, setIsLoaded] = useState(true)

  // if (!isLoaded) return <h4>Loading...</h4>;


  const showCards = cards.map(card => (
      <Link
        to={`/library/{card.value}`}
      >       
        <img 
          alt={card.name}
          key={card.value} 
          src={card.image}
          width="8%" />
      </Link>
  ))

  const {value} = cards

  return (
    <div>
      {showCards}

    </div>
  )
}

export default Library;

//library" will show type, name, meaningUp, meaningRev, desc 
//          <Link
// className="button"
// to={`/projects/${id}/edit`}
// >
// <FaPencilAlt />
// </Link>