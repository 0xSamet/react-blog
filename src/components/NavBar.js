import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <NavLink exact to="/"><Navbar.Brand>Blog</Navbar.Brand></NavLink>
      <Nav className="mr-auto">
        <NavLink exact to="/" className="nav-link" >Anasayfa</NavLink>
        <NavLink to="/posts" className="nav-link" >Yazılar</NavLink>
        <NavLink to="/contact" className="nav-link" >İletişim</NavLink>
      </Nav>
    </Navbar>
  ) 
}

export default NavBar
