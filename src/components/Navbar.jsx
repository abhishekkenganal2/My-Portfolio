import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="logo">Abhishek</div>
      <ul className="nav-links">
        {[
          { path: "/", label: "Home" },
          { path: "/about", label: "About" },
          { path: "/experience", label: "Experience" },
          { path: "/projects", label: "Projects" },
          { path: "/contact", label: "Contact" },
        ].map(({ path, label }) => (
          <li key={path} className={location.pathname === path ? "active" : ""}>
            <Link to={path}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;