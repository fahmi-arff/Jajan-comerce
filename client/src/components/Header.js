import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">Jajan Onlen</Link>
      <div className="right menu">
        <Link to="/" className="item">Branda</Link>
      </div>
      <button className="ui red button">
        Daftar
      </button>
      <button className="ui primary button">
        Login
      </button>
    </div>
  )
}

export default Header;