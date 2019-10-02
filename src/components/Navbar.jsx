import React, { useState } from 'react';
import {useDarkMode} from '../hooks/useDarkMode'
import {Route, Link} from 'react-router-dom'

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);

  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      {/* <Link to ='/' >new<Link/> */}
      <div className="dark-mode__toggle"
        onClick={toggleMode}>
        <div
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
