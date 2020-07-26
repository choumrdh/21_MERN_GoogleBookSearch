import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="navbar-brand">
          <NavLink to="/">Google Book Search</NavLink></div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarGoogleBookSearch"
        aria-controls="navbarGoogleBookSearch"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarGoogleBookSearch">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">Search</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/save" className="nav-link">
              Save
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
