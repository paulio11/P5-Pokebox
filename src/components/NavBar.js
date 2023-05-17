import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import brandlogo from "../assets/brandlogo.png";
import styles from "../styles/NavBar.module.css";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../contexts/CurrentUserContext";
import axios from "axios";

const NavBar = () => {
  // Get current user from context
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const handleLogOut = async () => {
    try {
      // Send log out request to API and then set current user to none
      await axios.post("dj-rest-auth/logout");
      setCurrentUser(null);
    } catch (error) {}
  };

  // Variables for logged in and logged out nav link items
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
      <span className={styles.LoggedInAs}>
        Logged in as{" "}
        <Link to={`/trainer/${currentUser?.profile_id}`}>
          <strong>{currentUser?.username}</strong>
        </Link>
      </span>
      <NavLink to="/" onClick={handleLogOut} className={styles.NavLink}>
        Log out
      </NavLink>
    </>
  );

  return (
    <Navbar bg="light" expand="lg">
      <NavLink to="/" className={styles.NavBrand}>
        <Navbar.Brand className="d-flex align-items-center">
          <img
            src={brandlogo}
            alt="Pokébox Logo"
            className={styles.BrandLogo}
          />
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
