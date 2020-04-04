import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">Jajan Onlen</Link>
      <div className="right menu">
        <Link to="/" className="item">Branda</Link>
      </div >
      <Link to={`/profile/create`} className="ui button red">
        Daftar
      </Link>
      <Link to={`/profile/login`} className="ui button primary">
        Login
      </Link>
    </div>
  )
}

export default Header;