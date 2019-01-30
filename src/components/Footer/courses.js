import React from 'react';
import './contributors.css';
import Modal from '../Modals/courseModal';

const Contrib = ({ contributors }) => {


  return (
    <div>
      <div className="cFooterlink" data-toggle="modal" data-target="#courseModal">
        <li>Zero to Mastery</li>
      </div>

      <Modal />

    </div>
  );
};

export default React.memo(Contrib);
