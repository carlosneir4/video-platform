import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';


const Header = () => {

  return (
    <nav>
      <div className="Header">
        <Link to="/" className="left brand-logo">
          Video Platform
            </Link>
        <ul className="right">
          <li>
            <Link to="/new">New Video</Link>
          </li>
          <li>
            <Link to="/list">List Videos</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;