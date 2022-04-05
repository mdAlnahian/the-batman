import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav-bar md:text-2xl text-xl text-white p-8 navbar">
      <NavLink
        style={({ isActive }) => {
          return {
            color: isActive ? "red" : "",
          };
        }}
        className="nav md:mr-6 mr-3"
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        style={({ isActive }) => {
          return {
            color: isActive ? "red" : "",
          };
        }}
        className="nav md:mr-6 mr-3"
        to="/reviews"
      >
        Reviews
      </NavLink>
      <NavLink
        style={({ isActive }) => {
          return {
            color: isActive ? "red" : "",
          };
        }}
        className="nav md:mr-6 mr-3"
        to="/dashboard"
      >
        Dashboard
      </NavLink>
      <NavLink
        style={({ isActive }) => {
          return {
            color: isActive ? "red" : "",
          };
        }}
        className="nav md:mr-6 mr-3"
        to="/blogs"
      >
        Blogs
      </NavLink>
    </nav>
  );
};

export default Navbar;
