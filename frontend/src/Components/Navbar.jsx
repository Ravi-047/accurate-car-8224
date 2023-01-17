import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div>Navbar</div>
     <Link to="/"  > Homepage</Link>
    <Link to="/login"  > login</Link>
    <Link to="/signup"  > signup</Link>

   
    </>
  )
}

export default Navbar