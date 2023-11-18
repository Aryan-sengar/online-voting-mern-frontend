import React from 'react';
import './Thanks.css';
import { Link } from 'react-router-dom';
import { CloseOutline } from 'react-ionicons';

function Thanks() {
  return (
    <div>
      <div className="wrapper">
        <span className="icon-close"><CloseOutline /></span>
        <div className="form-box login">
          <h2>Thank you for your valuable vote !</h2>
        </div>
      </div>
    </div>
  );
}

export default Thanks;

