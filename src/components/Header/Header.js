import React from 'react';
import { Link } from 'react-scroll';
import './Header.css';
import logo from '../../images/logo1.png';

const Header = () => (
  <header className="fixed-top">
    <nav id="header" className="navbar navbar-expand-lg navbar-light">
      <Link to="top" smooth duration={800} offset={-131} className="logo-link navbar-brand">
        <img src={logo} alt="logo" className="logo-active" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <div className="toggle-button-line" />
        <div className="toggle-button-line" />
        <div className="toggle-button-line" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav nav-buttons">
          <Link
            to="newsletter"
            className="button-primary nav-item"
            spy
            activeClass="active"
            smooth
            duration={800}
            offset={0}
          >
            Newsletter
          </Link>
          <Link
            to="data"
            className="button-primary nav-item"
            spy
            activeClass="active"
            smooth
            duration={800}
            offset={0}
          >
            Data
          </Link>
        </div>
      </div>
    </nav>
  </header>
);

export default Header;
