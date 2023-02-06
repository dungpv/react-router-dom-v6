import React from "react";
import { NavLink } from "react-router-dom";

export default function Header(props) {
  const handleActiveClass = () => {
    return ({ isActive }) =>
      isActive ? "nav-link bg-warning text-light font-weight-bold" : "nav-link";
  };

  const handleActiveStyle = () => {
    return ({ isActive }) => (isActive ? { textDecoration: "underline" } : {});
  };

  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark text-white">
        <NavLink className="navbar-brand" to="/">
          Cyberlearn
        </NavLink>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        />
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <NavLink
                className={handleActiveClass()}
                style={handleActiveStyle()}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={handleActiveClass()}
                style={handleActiveStyle()}
                to="/form"
              >
                Form
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={handleActiveClass()}
                style={handleActiveStyle()}
                to="/shop"
              >
                Shop
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={handleActiveClass()}
                style={handleActiveStyle()}
                to="/searchdemo"
              >
                Search
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={handleActiveClass()}
                style={handleActiveStyle()}
                to="/admin"
              >
                Admin
              </NavLink>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}
