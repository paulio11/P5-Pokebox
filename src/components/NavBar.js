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
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";
import { useSetCurrentNotification } from "../contexts/NotificationContext";
import { removeTokenTimestamp } from "../utils/Utils";

const NavBar = () => {
  // Get current user from context
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  const setCurrentNotification = useSetCurrentNotification();

  const { expanded, setExpanded, ref } = useClickOutsideToggle();

  const handleLogOut = async () => {
    try {
      // Send log out request to API and then set current user to none
      await axios.post("dj-rest-auth/logout");
      setCurrentUser(null);
      removeTokenTimestamp();
      setCurrentNotification("You have been logged out.");
    } catch (error) {}
  };

  // Variables for logged in and logged out nav link items
  const loggedOutItems = (
    <>
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
  );
};

export default NavBar;
