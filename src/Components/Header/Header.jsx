import React from "react";
import { NavLink } from "react-router-dom";

//Styles
import "./Styles.scss";

export default function Header() {
  return (
    <header>
      <div className="nav-container">
        <ul className="row space-around">
          <li className="nav-item">
            <NavLink
              to="maya"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Maya
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="qt"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              QT
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Wine About It
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="stats"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Stats
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="contact"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}
