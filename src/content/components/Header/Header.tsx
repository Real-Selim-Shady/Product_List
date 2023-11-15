import React from 'react';
import './Header.scss';

function Header() {
  return (
    <nav className="navbar">
      <i className="fa-solid fa-bars"></i>
      <p className="home-title">fasson</p>
      <i className="fa-regular fa-bell"></i>
    </nav>
  );
}


export default Header;
