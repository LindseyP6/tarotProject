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
      <h2>Logo</h2>
      <h2>COMING SOON: Enjoy 3 FREE readings + 70% off your first session!</h2>
    </div>
  )
}

export default Login
