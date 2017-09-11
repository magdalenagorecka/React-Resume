import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = (props) => (
  <header>
    <ul className="nav">
      <li className="nav__item"><NavLink exact to="/">Summary</NavLink></li>
      <li className="nav__item">
        <NavLink to="/skills">Skills</NavLink>
      </li>
      <li className="nav__item">
        <NavLink to="/education">Education</NavLink>
      </li>
      <li className="nav__item">
        <NavLink to="/experience">Experience</NavLink>
      </li>
      <li className="nav__item">
        <NavLink to="/projects">Projects</NavLink>
      </li>
      <li className="nav__item">
        <NavLink to="/public">Lectures</NavLink>
      </li>
    </ul>
  </header>
);

export default Header;
