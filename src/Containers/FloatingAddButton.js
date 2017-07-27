import React from 'react';
import { Link } from 'react-router-dom';

const FloatingAddButton = ({ user }) => (
  <div className="floating_buton">
    <Link to="/new+event">
      <button>+</button>
    </Link>
  </div >
);

export default FloatingAddButton;
