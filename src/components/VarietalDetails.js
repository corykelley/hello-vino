import React from 'react';
import { useParams } from 'react-router-dom';

import varietalData from '../data/varietalData';
import Footer from './Footer';

function VarietalDetails() {
  const { varietalName } = useParams();
  const thisVarietal = varietalData.find(
    (varietal) => varietal.name === varietalName
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
    <div className="w-8/12 my-8 mx-auto">
      <img
        className="max-w-5xl mx-auto mb-8 shadow-lg details-img"
        src={thisVarietal.img}
        alt={thisVarietal.name}
      />
      <div>
        <h1 className="font-bold text-4xl font-serif leading-tight">
          {thisVarietal.name}
        </h1>
        <h3 className="text-gray-600 text-xl mb-2">
          {thisVarietal.pronunciation}
        </h3>
        <hr className="mb-2" />
        <p className="mb-2">
          {arrowIcon}
          <strong className="uppercase">Country of Origin: </strong>
          {thisVarietal.countryOfOrigin}
        </p>
        <p className="mb-2">
          {arrowIcon}
          <strong className="uppercase">Taste: </strong>
          {thisVarietal.taste.map((taste, i) => (
            <span key={taste}>{(i ? ', ' : '') + taste}</span>
          ))}
        </p>
        <p className="mb-2">
          {arrowIcon}
          <strong className="uppercase">Description: </strong>
          {thisVarietal.description}
        </p>
        <p>
          {arrowIcon}
          <strong className="uppercase">Goes well with: </strong>
          {thisVarietal.foodPairing.map((pairing, i) => (
            <span key={pairing}>{(i ? ', ' : '') + pairing}</span>
          ))}
        </p>
      </div>
      <div className="mt-12 p-8 bg-gray-600 text-gray-100 shadow-lg">
        <p className="mb-1">
          <svg
            className="inline mr-2 mb-1 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path d="M18 21H7a4 4 0 0 1-4-4V5c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2h2a2 2 0 0 1 2 2v11a3 3 0 0 1-3 3zm-3-3V5H5v12c0 1.1.9 2 2 2h8.17a3 3 0 0 1-.17-1zm-7-3h4a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2zm0-4h4a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2zm0-4h4a1 1 0 0 1 0 2H8a1 1 0 1 1 0-2zm9 11a1 1 0 0 0 2 0V7h-2v11z" />
          </svg>
          <strong className="uppercase">Fun Fact:</strong>
        </p>
        <hr className="mb-2" />
        <p>{thisVarietal.funFact}</p>
      </div>
      <Footer />
    </div>
  );
}

export default VarietalDetails;
