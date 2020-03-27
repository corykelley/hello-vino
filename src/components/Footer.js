import React from 'react';

const Footer = () => (
  <div className="container w-full mt-24 mx-auto text-center">
    <p className="font-light tracking-wide text-base">
      Created by{' '}
      <a
        className="text-red-800 hover:text-gray-800 hover:underline"
        href="https://github.com/johncoryk"
        target="_blank"
        rel="noopener noreferrer"
      >
        johncoryk
      </a>{' '}
      using ReactJs
    </p>
  </div>
);

export default Footer;
