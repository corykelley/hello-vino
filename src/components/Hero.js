import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="flex md:flex-row flex-col">
      <Link to="/reds">
        <div className="bg-red flex">
          <div className="w-full self-center text-center">
            <h1 className="hero-text uppercase text-gray-100">Red Wine</h1>
            <p className="view-all-hero text-gray-100 text-xl">
              View All Varietals
            </p>
            <hr className="w-1/3 mx-auto" />
          </div>
        </div>
      </Link>
      <div className="bg-white flex">
        <div className="w-full self-center text-center">
          <h1 className="hero-text uppercase text-gray-100">White Wine</h1>
          <p className="view-all-hero text-gray-100 text-xl">
            View All Varietals
          </p>
          <hr className="w-1/3 mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
