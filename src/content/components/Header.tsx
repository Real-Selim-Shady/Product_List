import React from 'react';
import './Header.scss';

function Header() {
  return (<nav className="navbar">
    <div className="logo">Galeries VHB</div>
    <ul className="nav-links">

      <input type="checkbox" id="checkbox_toggle" />
      <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>

      <div className="menu">

        <li><a href="/Users/vadasilva/ET/product-list-react/public">Good</a></li>
        <li><a href="/Users/vadasilva/ET/product-list-react/public">Luck</a></li>

        <li className="services">
          <a href="/Users/vadasilva/ET/product-list-react/public">Have</a>
        </li>

        <li><a href="/Users/vadasilva/ET/product-list-react/public">Fun</a></li>
      </div>
    </ul>
  </nav>);
}


export default Header;
