import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';


const Header = () => {

  return (
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="left brand-logo">
            Video Platform
            </Link>
          <ul className="right">
            <li>
              <Link to="/new">Add New Video</Link>
            </li>
            <li>
              <Link to="/list">List Videos</Link>
            </li>
          </ul>
        </div>
      </nav>
   /* <Fragment>
      <header className={classes.header}>
        <h1>
          <Link to="/" className="left brand-logo">
            Video Platform
          </Link>
        </h1>
        <ul className="right">
            <li>
              <Link to="/new">Add New Video</Link>
            </li>
            <li>
              <Link to="/list">List Videos</Link>
            </li>
          </ul>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='A table full of delicious food!' />
      </div>
    </Fragment>*/
  );
};

export default Header;