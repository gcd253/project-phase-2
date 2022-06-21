import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <>
        <NavLink to='/homepage' >Homepage</NavLink>
        <NavLink to='/addchampion' >Add a Champion</NavLink>
        <NavLink to='/streams' >Stream Now</NavLink>
    </>
  )
}

export default NavBar