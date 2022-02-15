import React, {useState} from 'react';
import {Link} from 'react-router-dom';

function Library({cards}) {
  // const [isLoaded, setIsLoaded] = useState(false)

  // if (!isLoaded) return <h4>Loading...</h4>;


  const showCards = cards.map(card => (
    <div>
      <img alt={card.name}
      width="7%" key={card.value} src={card.image}/>
      <Link
        to={`/library/{card.value}`}
      > {card.name}
      </Link>
    </div>
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