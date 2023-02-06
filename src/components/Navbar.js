import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../img/logo.png';
import '../style/style.scss';

export default function Navbar() {
  const location = useLocation();

  return (
    <div>
      <nav className="navbar">
        <div className="head-icon">
          <img className="icon" src={logo} alt="logo" />
          <h2> Space Travelers Hub </h2>
        </div>

        <ul className="links">
          <li
            className={`link ${location.pathname === '/Rockets' && 'active'}`}
          >
            {' '}
            <Link to="/">Rockets</Link>
            {' '}
          </li>
          <li
            className={`link ${location.pathname === '/Missions' && 'active'}`}
          >
            {' '}
            <Link to="/Missions">Missions</Link>
            {' '}
          </li>
          <span className="horizontal-divider"> </span>
          <li
            className={`link ${location.pathname === '/Profile' && 'active'}`}
          >
            {' '}
            <Link to="/Profile">My Profile</Link>
            {' '}
          </li>
        </ul>
      </nav>
    </div>
  );
}
