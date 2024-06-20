import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from './utils/global.context'; 
import '../index.css';

const Navbar = () => {
  const { state, dispatch } = useContext(GlobalContext);

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    <nav className={state.theme}>
      <div className="nav-logo">
        <img src="/images/DH.png" alt="DH-logo" className="logo" />
      </div>
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
        <Link to="/favs" className="nav-link">Favs</Link>
      </div>
      <button onClick={toggleTheme} className='theme-button'>Change theme</button>
    </nav>
  );
};

export default Navbar;



