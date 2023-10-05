import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <div className="container">
        <p className="mb-0">
          Developed by{" "}
          <NavLink
            to="https://felixajibola.com.ng"
            style={{ textDecoration: "none", color: "white" }}
          >
            Felix Ajibola
          </NavLink>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
