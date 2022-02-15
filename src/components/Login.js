import React from 'react'

function Login() {
  return (
    <div>
      <h1>Welcome!</h1>
      
      <form>
        <input 
        type="text"
        name="name"
        placeholder="enter your name"
      />
      <br></br>
      <input 
        type="text"
        name="question"
        placeholder="What do you want to know today?"
      />
      </form>
    </div>
  )
}

export default Login
