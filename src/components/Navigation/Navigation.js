import React from 'react';
import './Navigation.css';

const Navigation = ({ onNavClick }) => (
  <div className="container">
    <div className="row center text-center">
      <div className="d-inline-block">
        <button className="button-primary" onClick={() => onNavClick(0)}>
          <i className="fas fa-globe" />
          <span className="d-none d-sm-block">Web</span>
        </button>
      </div>

      <div className="d-inline-block">
        <button className="button-primary" onClick={() => onNavClick(1)}>
          <i className="fas fa-mobile-alt" />
          <span className="d-none d-sm-block">Mobile</span>
        </button>
      </div>

      <div className="d-inline-block">
        <button className="button-primary" onClick={() => onNavClick(2)}>
          <i className="fas fa-code" />
          <span className="d-none d-sm-block">Languages</span>
        </button>
      </div>

      <div className="d-inline-block">
        <button className="button-primary" onClick={() => onNavClick(3)}>
          <i className="fas fa-server" />
          <span className="d-none d-sm-block">Backend</span>
        </button>
      </div>
    </div>
  </div>
);

export default Navigation;
