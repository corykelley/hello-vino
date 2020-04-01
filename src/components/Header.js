import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { Context } from '../Context';

import HelloVinoLogo from '../photos/hello-vino-logo.png';

const Header = () => {
  const { setVisibility } = useContext(Context);

  return (
    <div className="flex justify-between items-center py-8 shadow-md">
      <h2 className="ml-24 font-serif">
        <Link to="/">
          <img className="logo" src={HelloVinoLogo} alt="Hello Vino Logo" />
        </Link>
      </h2>
      <ul className="mr-24 flex flex-row uppercase">
        <li className="px-3 links">
          <Link to="/varietals">All Varietals</Link>
        </li>
        <li className="px-3 links">
          <Link onClick={() => setVisibility(false)} to="/what-to-drink">
            What To Drink
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
