import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  let activeStyle = {
    color: "red",
  };

  return (
    <header>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink
                to="maya"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Maya
              </NavLink>
            </li>
            <li>
              <NavLink
                to="qt"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                QT
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="stats"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Stats
              </NavLink>
            </li>
            <li>
              <NavLink
                to="contact"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
