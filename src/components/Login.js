import React, {useState} from 'react'
import { useHistory } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    name: "",
    question: "",
    email: "",
  });
  const history = useHistory();
  
  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newUser = {
        name: formData.name,
        question: formData.question,
        email : formData.email,
      };

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      // .then((r) => r.json())
      // .then((newCard) => onAddCard(newCard));
      setFormData({name:"", question:"", email:""})
      console.log(newUser)
      history.push("/readings");
  }

  return (
    <div>
      <h1>Welcome!</h1>
      
      <form onSubmit={handleSubmit} className="form">
        <h4>To begin, enter your name below.</h4>
        <input 
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="enter your name"
      />
      <br></br>
      <h4>What question would you like answered?</h4>
      <input 
        type="text"
        name="question"
        value={formData.question}
        onChange={handleChange}
        placeholder="question"
      /> 
      <br></br>
      <input 
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="email"
      />
      <br></br>
      <input
        type="submit"
        name="submit"
        value="Join!"
        className="submit"
      />
      </form>

      <h2>Logo Goes here</h2>
      <ul>COMING SOON: 
        <li>Professional readings: Enjoy 3 FREE readings + 70% off your first session!</li>
        <li>Message board: Connect with other Tarot members</li>
        </ul>
    </div>
  )
}

export default Login
