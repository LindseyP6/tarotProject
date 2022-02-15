import React from 'react'

function Library({cards}) {
  const showCards = cards.map(card => (
    <img alt={card.name}
    width="7%" key={card.value} src={card.image}/>
  ))
  return (
    <div>{showCards}</div>
  )
}

export default Library;