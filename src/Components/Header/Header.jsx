import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

//Styles
import "./Styles.scss";

export default function Header() {
  const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

  return (
    <motion.header
      initial={{ opacity: 0, y: "-200px" }}
      animate={{ opacity: 1, translateY: "200px" }}
      transition={transition}
    >
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
              QtCinderella
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
              to="contact"
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              Contact Us
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
        </ul>
      </div>
    </motion.header>
  );
}
