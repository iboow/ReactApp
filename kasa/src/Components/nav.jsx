import "../styles/components.sass/nav.scss";
import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul>
        <li className="home">
          <NavLink to="/">Accueil</NavLink>
        </li>
        <li className="about">
          <NavLink to="/about">À Propos</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
