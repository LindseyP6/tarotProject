import React from 'react'
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
  <div id="nav">
    <NavLink className="nav-li" to="/readings">Readings</NavLink>
    <NavLink className="nav-li" to="/library">Library</NavLink>
    <NavLink className="nav-li" to="/">Home</NavLink>  
  </div>
  )
}


export default NavBar;