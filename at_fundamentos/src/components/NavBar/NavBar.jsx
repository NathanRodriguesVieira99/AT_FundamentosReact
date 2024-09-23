import React from 'react';

const Navbar = ({ onBack, title }) => {
  return (
    <nav className="navbar">
      <button onClick={onBack}>Voltar</button>
      <h1>{title}</h1>
    </nav>
  );
};

export default Navbar;