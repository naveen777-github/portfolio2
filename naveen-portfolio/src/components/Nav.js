import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Nav.css";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <Link className="logo" to="/" onClick={() => setOpen(false)}>
        NAVEEN RAYAPUDI
      </Link>

      <div className={`links ${open ? "open" : ""}`}>
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={() => setOpen(false)}
        >
          Home
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={() => setOpen(false)}
        >
          Projects
        </NavLink>

        <NavLink
          to="/education"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={() => setOpen(false)}
        >
          Education and Certifications
        </NavLink>

        <NavLink
          to="/experience"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={() => setOpen(false)}
        >
          Experience
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={() => setOpen(false)}
        >
          Contact and Resume
        </NavLink>
      </div>

      {/* Hamburger Icon */}
      <button
        className="burger"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <FaTimes /> : <FaBars />}
      </button>
    </nav>
  );
}
