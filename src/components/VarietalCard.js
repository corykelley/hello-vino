import React from 'react';
import { Link } from 'react-router-dom';

const VarietalCard = ({ varietal }) => {
  return (
    <div className="container my-8 mx-auto">
      <div class="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
        <img class="w-full" src={varietal.img} alt={varietal.name} />
        <div class="px-6 py-4">
          <div class="font-bold text-2xl mb-2">
            <Link to={'/varietals/' + varietal.name}>{varietal.name}</Link>
          </div>
          <p class="text-gray-700 text-base">
            {varietal.description
              .split(' ')
              .slice(0, 14)
              .join(' ') + ' ...'}
          </p>
        </div>
        <div class="px-6 py-4">DUMMY</div>
      </div>
    </div>
  );
};

export default VarietalCard;
