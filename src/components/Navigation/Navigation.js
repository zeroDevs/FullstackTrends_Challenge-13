import React from 'react';
import Button from './Button';
import './Navigation.css';

const Navigation = ({ onNavClick, currentCategoryIndex }) => {
  const isActive = categoryIndex =>
    `button-primary button--icon${categoryIndex === currentCategoryIndex ? ' active boxx' : ''}`;
  return (
    <div className="container">
      <div className="row center text-center">
        <div className="d-inline-block">
          <Button
            btnType="button"
            btnText="Web"
            iconClass="fa-mobile-alt"
            className={isActive(0)}
            onClick={() => onNavClick(0)}
          />
        </div>

        <div className="d-inline-block">
          <Button
            btnType="button"
            btnText="Mobile"
            iconClass="fa-mobile-alt"
            className={isActive(1)}
            onClick={() => onNavClick(1)}
          />
        </div>

        <div className="d-inline-block">
          <Button
            btnType="button"
            btnText="Languages"
            iconClass="fa-code"
            className={isActive(2)}
            onClick={() => onNavClick(2)}
          />
        </div>

        <div className="d-inline-block">
          <Button
            btnType="button"
            btnText="Backend"
            iconClass="fa-server"
            className={isActive(3)}
            onClick={() => onNavClick(3)}
          />
        </div>
      </div>
    </div>
  );
};
export default React.memo(Navigation);
