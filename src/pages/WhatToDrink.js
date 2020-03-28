import React from 'react';

import Footer from '../components/Footer';

const WhatToDrink = () => {
  return (
    <div className="w-8/12 mt-12 mb-4 mx-auto">
      <form className="shadow-xl rounded px-8 pt-6 pb-8 my-8 mx-auto">
        <div className="mb-4">
          <label
            className="block text-gray-800 text-sm font-bold mb-2"
            htmlFor="What Are You Eating?"
          >
            <p className="text-xl">What Are You Eating?</p>
          </label>
          <div className="inline-block relative w-full">
            <select className="pointer block appearance-none w-full border border-gray-800 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
              <option>Nothing</option>
              <option>Chicken or other fowl</option>
              <option>Red Meat</option>
              <option>Fish</option>
              <option>Cheese</option>
              <option>Something Spicy</option>
              <option>Pasta</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current text-gray-800"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-800 text-sm font-bold mb-2"
            htmlFor="Is it a Special Occasion?"
          >
            <p className="text-xl">Is it a Special Occasion?</p>
          </label>
          <div className="inline-block relative w-full">
            <select className="pointer block appearance-none w-full border border-gray-800 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
              <option>YES!</option>
              <option>No</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current text-gray-800"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-800 text-sm font-bold mb-2"
            htmlFor="What is the Current Season?"
          >
            <p className="text-xl">What is the Current Season?</p>
          </label>
          <div className="inline-block relative w-full">
            <select className="pointer block appearance-none w-full border border-gray-800 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
              <option>Spring</option>
              <option>Summer</option>
              <option>Fall</option>
              <option>Winter</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current text-gray-800"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path d="M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="duration-200 bg-red-800 hover:bg-red-700 text-gray-100 py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mx-auto"
            type="button"
          >
            Yes, Tell Me..
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default WhatToDrink;
