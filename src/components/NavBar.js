import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import pokeball from "../assets/pokeball.png";
import styles from "../styles/NavBar.module.css";
import { useCurrentUser } from "../contexts/CurrentUserContext";

const NavBar = () => {
  // Get current user from context
  const currentUser = useCurrentUser();

  const loggedOutItems = (
    <>
      <NavLink to="/login" className={styles.NavLink}>
        Log in
      </NavLink>
      <NavLink to="/register" className={styles.NavLink}>
        Register
      </NavLink>
    </>
  );
  const loggedInItems = (
    <>
      <span className={styles.NavLink}>
        Logged in as <strong>{currentUser?.username}</strong>
      </span>
      <NavLink to="/logout" className={styles.NavLink}>
        Log out
      </NavLink>
    </>
  );

  return (
    <Navbar bg="light" expand="lg">
      <NavLink to="/" className={styles.NavBrand}>
        <Navbar.Brand className="d-flex align-items-center">
          <img src={pokeball} alt="Pokébox Logo" className={styles.BrandLogo} />
          <strong>POKÉBOX</strong>
        </Navbar.Brand>
      </NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink to="/pokemon" className={styles.NavLink}>
            Pokémon
          </NavLink>
          <NavLink to="/trainers" className={styles.NavLink}>
            Trainers
          </NavLink>
        </Nav>
        <Nav className="ml-auto">
          {currentUser ? loggedInItems : loggedOutItems}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
