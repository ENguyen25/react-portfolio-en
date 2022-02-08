import React from 'react';
import { Link } from 'react-router-dom';
import homeLogo from '../images/logo2.png'

function Header() {
  return (
    <header>
      <Link to="/"><img id="logo" src={homeLogo} alt=""></img></Link>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/work">Work</Link></li>
            <li><Link to="/contact">Contact Me</Link></li>
            <li><Link to="/resume">Resume</Link></li>
        </ul>
    </header>
  );
}

export default Header;
