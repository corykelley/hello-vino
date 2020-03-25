import React from 'react';
import { Link } from 'react-router-dom';

import Button from './Button';

const VarietalCard = ({ varietal }) => {
  return (
    <div className="container my-8 mx-auto">
      <div class="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
        <img class="w-full" src={varietal.img} alt={varietal.name} />
        <div class="px-6 py-4">
          <div class="font-bold text-3xl mb-2 hover:text-red-800 duration-200">
            <Link to={'/varietals/' + varietal.name}>{varietal.name}</Link>
          </div>
          <p class="text-gray-700 text-base">
            {varietal.description
              .split(' ')
              .slice(0, 14)
              .join(' ') + ' ...'}
          </p>
        </div>
        <div className="px-8 py-4 bg-red-800">
          <Button linkTo={'/varietals/' + varietal.name}>
            <p className="text-gray-100 inline hover:font-bold duration-200">
              Learn More
            </p>
            <svg
              className="fill-current text-gray-100 inline m-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="20"
              height="20"
            >
              <path d="M18.59 13H3a1 1 0 0 1 0-2h15.59l-5.3-5.3a1 1 0 1 1 1.42-1.4l7 7a1 1 0 0 1 0 1.4l-7 7a1 1 0 0 1-1.42-1.4l5.3-5.3z" />
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VarietalCard;
