import React from 'react';

function Header() {
  return (
    <header>
      <img id="logo" src="logo2.png" alt=""></img>
        <ul>
            <li><a href="#about-me">About Me</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#contact-me">Contact Me</a></li>
            <li><a href="#resume">Resume</a></li>
        </ul>
    </header>
  );
}

export default Header;
