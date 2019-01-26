import React from 'react';
import './Button.css';

const Button = props => (
  <button
    type={props.btnType}
    btnText={props.btnText}
    className={props.className}
    onClick={props.onClick}
  >
    <i className={`fas ${props.iconClass}`} />
    <span className="d-none d-sm-block">{props.btnText}</span>
  </button>
);

export default Button;
