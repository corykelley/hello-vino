import React from 'react';
import { Link } from 'react-router-dom';

import varietalData from '../data/varietalData';

const Recommendation = ({ recommendation, closeModal }) => {
  const thisRecommendation = varietalData.find(
    (varietal) => varietal.name === recommendation
  );
  const arrowIcon = (
    <svg
      className="inline -ml-2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
    >
      <path d="M9.3 8.7a1 1 0 0 1 1.4-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.4-1.4l3.29-3.3-3.3-3.3z" />
    </svg>
  );

  return (
    <div className="container z-10 inset-0 absolute shadow-xl rounded px-6 pt-4 mb-4 mx-auto bg-gray-100 modal">
      <div className="w-8/12 mt-12 mx-auto modal-info">
        <img
          className="max-w-5xl mx-auto mb-4 shadow-lg"
          src={thisRecommendation.img}
          alt={thisRecommendation.name}
        />
        <div className="w-full text-center">
          <h2 className="tracking-wide uppercase text-sm">
            We recommend a nice glass of...
          </h2>
          <h1 className="font-bold text-4xl font-serif leading-tight text-center">
            {thisRecommendation.name}
          </h1>
          <p className="text-lg">
            {arrowIcon}
            For more information about {thisRecommendation.name},
            <Link
              className="links"
              to={'/varietals/' + thisRecommendation.name}
            >
              {' '}
              click here!
            </Link>
          </p>
          <button
            onClick={closeModal}
            className="duration-200 bg-red-800 hover:bg-red-700 text-gray-100 py-2 px-4 rounded focus:outline-none focus:shadow-outline w-1/2 mx-auto mt-4"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
