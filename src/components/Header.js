import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Context } from '../Context';

import HelloVinoLogo from '../photos/hello-vino-logo.png';

const Header = () => {
  const { setVisibility } = useContext(Context);

  return (
    <div className="header-div">
      <h2 className="font-serif">
        <Link to="/">
          <img className="logo" src={HelloVinoLogo} alt="Hello Vino Logo" />
        </Link>
      </h2>
      <ul className="nav-links uppercase">
        <li className="links">
          <Link to="/varietals">All Varietals</Link>
        </li>
        <li className="pl-4 links">
          <Link onClick={() => setVisibility(false)} to="/what-to-drink">
            What To Drink
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
