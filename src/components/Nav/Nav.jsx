import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <header id="navbar-header">
      <h2 className="logo" alt="logo">
        <Link to="/">VH</Link>
      </h2>
      {/* <nav>
        <ul className="nav_links">
          <li>
            <Link to="/code">Code Nav</Link>
          </li>
          <li>
            <Link to="/skills">Skills Nav</Link>
          </li>
        </ul>
      </nav> */}
      <a className="cta" href="mailto:hernandez87v@hotmail.com">
        <h3>Contact</h3>
      </a>
    </header>
  );
}
