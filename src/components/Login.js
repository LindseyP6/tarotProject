import React from 'react'

function Login() {
  return (
    <div>
      <h1>Welcome!</h1>
      
      <form className="form">
        <h4>To begin, enter your name below.</h4>
        <input 
        type="text"
        name="name"
        placeholder="enter your name"
      />
      <br></br>
      <h4>What question would you like answered?</h4>
      <input 
        type="text"
        name="question"
        placeholder="question"
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
