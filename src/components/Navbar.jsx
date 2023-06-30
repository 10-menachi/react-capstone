import React from 'react';
import { NavLink } from 'react-router-dom';
import img from '../Images/space-img.png';

const Navbar = () => (
  <nav className="flex">
    <div className="logo flex">
      <img src={img} alt="Space Logo" />
      <h1>Space Travelers&apos; Hub</h1>
    </div>
    <ul className="flex">
      <li>
        <NavLink to="/">Rockets</NavLink>
      </li>
      <li>
        <NavLink to="missions">Missions</NavLink>
      </li>
      <li>
        <NavLink to="myprofile">My profile</NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
