import React,{Component} from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar_first-line">
        <div className="navbar_logo">Parazon</div>
        <ul className="navbar_menu">
          <li>Shop</li>
          <li>Sell</li>
          <li>Help</li>
        </ul>
        <button className="navbar_login-btn">Login</button>
      </div>
      <div className="navbar_second-line">
        <ul className="navbar_submenu">
          <li>All Models</li>
          <li>Academic</li>
          <li>Technology</li>
          <li>Business</li>
          <li>Marketing</li>
          <li>Art</li>
          <li>Healthcare</li>
          <li>Fun</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
