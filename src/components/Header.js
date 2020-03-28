import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="flex justify-between items-center py-8 shadow-md">
      <h2 className="ml-24 font-serif">
        <Link to="/">Hello Vino</Link>
      </h2>
      <ul className="mr-24 flex flex-row uppercase">
        <li className="px-3 links">
          <Link to="/varietals">All Varietals</Link>
        </li>
        <li className="px-3 links">
          <Link to="/what-to-drink">What To Drink</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
