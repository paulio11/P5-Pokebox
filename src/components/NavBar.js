import React from "react";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
// Bootstrap
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// Styles
import styles from "../styles/NavBar.module.css";
// Assets
import brandlogo from "../assets/brandlogo120.webp";
// Contexts
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../contexts/CurrentUserContext";
import { useSetCurrentNotification } from "../contexts/NotificationContext";
// Hooks
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";
// Utils
import { removeTokenTimestamp } from "../utils/Utils";

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  const setCurrentNotification = useSetCurrentNotification();
  const { expanded, setExpanded, ref } = useClickOutsideToggle();

  // Logs out user and sets currentUser to null
  const handleLogOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout");
      setCurrentUser(null);
      removeTokenTimestamp();
      setCurrentNotification("You have been logged out.");
    } catch (error) {
      setCurrentNotification(
        "An error occurred while attempting to log out. Please try again."
      );
    }
  };

  // Variables for logged in and logged out nav link items
  const loggedOutItems = (
    <>
      {/* Links for logged out users */}
      <NavLink
        to="/login"
        className={({ isActive }) =>
          isActive ? styles.NavLinkActive : styles.NavLink
        }
      >
        Log in
      </NavLink>
      <NavLink
        to="/register"
        className={({ isActive }) =>
          isActive ? styles.NavLinkActive : styles.NavLink
        }
      >
        Register
      </NavLink>
    </>
  );
  const loggedInItems = (
    <>
      {/* Links for logged in users */}
      <span className={styles.LoggedInAs}>
        Logged in as{" "}
        <Link to={`/trainer/${currentUser?.profile_id}`}>
          <strong>{currentUser?.username}</strong>
        </Link>
      </span>
      <NavLink
        to="/settings"
        className={({ isActive }) =>
          isActive ? styles.NavLinkActive : styles.NavLink
        }
      >
        Settings
      </NavLink>
      <NavLink to="/" onClick={handleLogOut} className={styles.NavLink}>
        Log out
      </NavLink>
    </>
  );

  return (
    <>
      {/* Navigation */}
      <Navbar bg="light" expand="lg" expanded={expanded}>
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
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          ref={ref}
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink
              to="/pokemon"
              className={({ isActive }) =>
                isActive ? styles.NavLinkActive : styles.NavLink
              }
            >
              Pokémon
            </NavLink>
            <NavLink
              to="/trainers"
              className={({ isActive }) =>
                isActive ? styles.NavLinkActive : styles.NavLink
              }
            >
              Trainers
            </NavLink>
            <NavLink
              to="/posts"
              className={({ isActive }) =>
                isActive ? styles.NavLinkActive : styles.NavLink
              }
            >
              Diary Entries
            </NavLink>
            {currentUser && (
              <NavLink
                to="/newpost"
                className={({ isActive }) =>
                  isActive ? styles.NavLinkActive : styles.NavLink
                }
              >
                <i className="fas fa-plus" /> New Diary Entry
              </NavLink>
            )}
          </Nav>
          <Nav className="ml-auto">
            {currentUser ? loggedInItems : loggedOutItems}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
