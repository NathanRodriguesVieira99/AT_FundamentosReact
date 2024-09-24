import React from 'react';
import './User.css';

function User({ name, catchPhrase, onClick }) {
  return (
    <div className='user-card' id='users' onClick={onClick}>
      <h2>{name}</h2>
      <p>{catchPhrase}</p>
    </div>
  );
}

export default User;
