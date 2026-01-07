import { Link, NavLink } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <nav className="nav">
      <Link className="logo" to="/">
        NAVEEN RAYAPUDI
      </Link>

      <div className="links">
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Projects
        </NavLink>

        <NavLink
          to="/education"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Education and Certifications
        </NavLink>

        <NavLink
          to="/experience"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Experience
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Contact and Resume
        </NavLink>
      </div>
    </nav>
  );
}
