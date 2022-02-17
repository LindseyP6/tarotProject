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
      <br></br>
      <form onSubmit={handleSubmit}>
        <h4>Enter your name below</h4>
        <input 
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="enter your name"
      />
      <br></br>
      <h4>What is your question?</h4>
      <input 
        type="text"
        name="question"
        value={formData.question}
        onChange={handleChange}
        placeholder="question"
      /> 
      <br></br>
      <h4>Enter your email</h4>
      <input 
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="email"
      />
      <br></br>
      <br></br>
      <button 
        type="submit"
        name="submit"
        value="Join!"
        className="submit"
        > <strong>Join!</strong>
      </button>
        </form>
<br></br>
<br></br>
<br></br>
      <img src ="../images/logo.webp" alt="lotuslogo"/>
      <br></br>

      <div className="footer">
      <h3>COMING SOON:</h3>
        <p style={{color:"#31cb31"}}><strong>Professional readings: Enjoy 3 FREE readings + 70% off your first session!</strong></p>
        <p>Message board: Connect with other Tarot members</p>
      </div>

    </div>
  )
}

export default Login
