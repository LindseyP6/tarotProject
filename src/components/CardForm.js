import React, {useState} from 'react'

function CardForm({onAddCard}) {
  const [formData, setFormData] = useState({
      name: "",
      image: "",
      meaningUp: "",
    });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newCard = {
        name: formData.name,
        image: formData.image,
        meaningUp : formData.meaningUp,
      };

    fetch("http://localhost:3000/cards", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCard),
    })
      .then((r) => r.json())
      .then((newCard) => onAddCard(newCard));
      setFormData({name:"", image:"", meaningUp:""})
      console.log(newCard)
  }

  return (
    <div className="formcontainer">
    <form onSubmit={handleSubmit} className="add-toy-form">
      <input
        type="text"
        name="name"
        onChange={handleChange}
        value={formData.name}
        placeholder="Enter a card name..."
        className="input-text"
      />
      <input
        type="text"
        name="image"
        onChange={handleChange}
        value={formData.image}
        placeholder="Enter a card's image URL..."
        className="input-text"
      />
    <input
        type="text"
        name="meaningUp"
        onChange={handleChange}
        value={formData.meaningUp}
        placeholder="Enter a card's meaningUp..."
        className="input-text"
      />
      <input 
        style={{backgroundColor: "#dfc9de", color:"rgb(72, 34, 61)"}}
        type="submit"
        name="submit"
        value="Add Your Card"
        className="submit"
      />
    </form>
  </div>
  )
}

export default CardForm