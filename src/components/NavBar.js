import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import pokeball from "../assets/pokeball.png";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <NavLink to="/">
        <Navbar.Brand className="d-flex align-items-center">
          <img src={pokeball} alt="Pokébox Logo" />
          <strong>POKÉBOX</strong>
        </Navbar.Brand>
      </NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink to="/pokemon">Pokémon</NavLink>
          <NavLink to="/trainers">Trainers</NavLink>
        </Nav>
        <Nav className="ml-auto">
          <NavLink to="/login">Log in</NavLink>
          <NavLink to="/login">Log out</NavLink>
          <NavLink to="/login">Register</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
