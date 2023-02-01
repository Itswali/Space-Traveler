import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo.png';
import '../style/style.scss';

export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
      <img className="icon" src={logo} alt="logo" />
      <h2>SpaceTravelers </h2>
      <ul className="links">
        <li className="link">
          {' '}
          <Link to="/Missions">Missions</Link>
          {' '}
        </li>
        <li className="link1">
          {' '}
          <Link to="/Space">SpaceShips</Link>
          {' '}
        </li>
      </ul>
      </nav>

      
    </div>
  )
}
