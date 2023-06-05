import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((open) => !open);
  };

  const Refresh = () => {
    setTimeout(() => {
      window.location.reload();
    }, 10)
  };

  return (
    <nav className="header">
      <ul className="navigation">
        <li>
          <NavLink to="./" className="Nal">
            <h1>Business College</h1>
          </NavLink>
        </li>
        <li className="mob_menu" onClick={toggleMenu}>
          <ul>
            <li>
              {isOpen ? (
                <span className="material-symbols-outlined">menu_open</span>
              ) : (
                <span className="material-symbols-outlined">menu</span>
              )}
            </li>
          </ul>
        </li>
        <li className={`desk_menu ${isOpen ? "is_open" : ""}`}>
          <ul className="dropdownMenu">
            <NavLink to="/" onClick={toggleMenu}>
              <li>
                <h4>Home</h4>
              </li>
            </NavLink>

            <NavLink to="/aboutSeminar" onClick={toggleMenu}>
              <li>
                <h4>About the seminar</h4>
              </li>
            </NavLink>
            <NavLink to="/eventList" onClick={toggleMenu}>
              <li>
                <h4>Program</h4>
              </li>
            </NavLink>
            <NavLink to="/whatToDoHelsinki" onClick={toggleMenu}>
              <li>
                <h4>What to do in Helsinki</h4>
              </li>
            </NavLink>
            <NavLink to="/faq" onClick={toggleMenu}>
              <li>
                <h4>F.A.Qs</h4>
              </li>
            </NavLink>

            <NavLink to="/attendeesList" onClick={toggleMenu}>
              <li>
                <h4>Attendees</h4>
              </li>
            </NavLink>

            <NavLink to="/access" onClick={Refresh}>
              {/* <NavLink to="/access" onClick={toggleMenu}> */}
              <li>
                <h4>Log In | Log Out </h4>
              </li>
            </NavLink>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
