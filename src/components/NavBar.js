import React from 'react'
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
  <div id="nav">
    <div className="overlay">
      <h1>PERSONAL TAROT READINGS</h1>
<<<<<<< HEAD
      <NavLink className="nav-li" to="/readings">Readings</NavLink>
      <NavLink className="nav-li" to="/library">Library</NavLink>  
=======
      <NavLink className="nav-li" exact to="/readings">Readings</NavLink>
      <NavLink className="nav-li" exact to="/library">Library</NavLink>
      <NavLink className="nav-li" exact to="/">Welcome</NavLink>  
>>>>>>> working
      <img className="logo" src="https://media.istockphoto.com/vectors/beauty-lotus-logo-vector-design-illustration-vector-id1224093652?k=20&m=1224093652&s=170667a&w=0&h=Jqhwgn3piTenNuqwvtMkeJH6qlp1tfTjPjmUOKFH1hE=" alt="lotus"/>
    </div>
  </div>
  )
}


export default NavBar;