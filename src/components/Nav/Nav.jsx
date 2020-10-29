import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <header id="navbar-header">
      <h2 className="logo" alt="logo">
        <Link to="/">Vlad Hernandez</Link>
      </h2>
      <nav>
        <ul className="nav_links">
          <li>
            <Link to="/placeholder">placeholder</Link>
          </li>
        </ul>
      </nav>
      <a className="cta" href="mailto:hernandez87v@hotmail.com">
        <button>Contact</button>
      </a>
    </header>
  );
}
