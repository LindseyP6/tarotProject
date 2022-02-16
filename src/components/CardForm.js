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
          ...formData,
        };
    
        fetch("http://localhost:3000/cards", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newCard),
        })
          .then((r) => r.json())
          .then(onAddCard);
      }
    
  return (
    <div className="container">
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
        type="submit"
        name="submit"
        value="Add Card"
        className="submit"
      />
    </form>
  </div>
  )
}

export default CardForm