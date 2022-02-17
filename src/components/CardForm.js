import React, {useState} from 'react'

function CardForm({onAddCard}) {
  const [formData, setFormData] = useState({
      name: "",
      image: "",
      desc: "",
      meaningUp: "",
      meaningRev: "",
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
        desc : formData.desc,
        meaningUp : formData.meaningUp,
        meaningRev : formData.meaningRev,
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
      setFormData({name:"", image:"", desc:"", meaningUp:"", meaningRev:"" })
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
        placeholder="Enter card name..."
        className="input-text"
      />
      <input
        type="text"
        name="image"
        onChange={handleChange}
        value={formData.image}
        placeholder="Enter card's image URL..."
        className="input-text"
      />
    <input
        type="text"
        name="desc"
        onChange={handleChange}
        value={formData.desc}
        placeholder="Enter card's description..."
        className="input-text"
      />
      <input
        type="text"
        name="meaningUp"
        onChange={handleChange}
        value={formData.meaningUp}
        placeholder="Enter card's meaningUp..."
        className="input-text"
      />
      <input
        type="text"
        name="meaningRev"
        onChange={handleChange}
        value={formData.meaningRev}
        placeholder="Enter card's meaningRev..."
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