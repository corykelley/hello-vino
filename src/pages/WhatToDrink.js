import React, { useState } from 'react';

import Footer from '../components/Footer';

const WhatToDrink = () => {
  const [option1, setOption1] = useState('---');
  const [option2, setOption2] = useState('---');
  const [option3, setOption3] = useState('---');
  // const [options, setOptions] = useState();

  const onSubmitForm = e => {
    if (option1 === '---' || option2 === '---' || option3 === '---') {
      alert('Please select all options!');
      e.preventDefault();
    } else {
      switch (option1) {
        case 'Nothing':
          switch (option2) {
            case 'Yes':
              switch (option3) {
                case 'Spring':
                  alert('Spring');
                  break;
                case 'Summer':
                  alert('Summer');
                  break;
                case 'Fall':
                  alert('Fall');
                  break;
                case 'Winter':
                  alert('Winter');
                  break;
              }
              break;
            case 'No':
              switch (option3) {
                case 'Spring':
                  alert('Whiteasdfasdf Wine');
                  break;
              }
          }
          break;
        case 'Chicken or Other Fowl':
          switch (option2) {
            case 'Yes':
              switch (option3) {
                case 'Spring':
                  alert('Coke');
                  break;
              }
          }
          break;
        case 'Red Meat':
          switch (option2) {
            case 'Yes':
              switch (option3) {
                case 'Spring':
                  alert('REEEED');
                  break;
              }
          }
          break;
        case 'Fish':
          switch (option2) {
            case 'Yes':
              switch (option3) {
                case 'Spring':
                  alert('REEEED');
                  break;
              }
          }
          break;
        case 'Cheese':
          switch (option2) {
            case 'Yes':
              switch (option3) {
                case 'Spring':
                  alert('REEEED');
                  break;
              }
          }
          break;
        case 'Something Spicy':
          switch (option2) {
            case 'Yes':
              switch (option3) {
                case 'Spring':
                  alert('REEEED');
                  break;
              }
          }
          break;
        case 'Pasta':
          switch (option2) {
            case 'Yes':
              switch (option3) {
                case 'Spring':
                  alert('REEEED');
                  break;
              }
          }
      }

      // if (option1 === 'Nothing') {
      //   if (option2 === 'Yes') {
      //     if (option3 === 'Spring') {
      //       alert('Red Wine');
      //     } else if (option3 === 'Summer') {
      //       alert('White Wine');
      //     }
      //   }
      // }
    }
    console.log({ option1 });
    console.log({ option2 });
    console.log({ option3 });
  };

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
            <select
              onChange={e => setOption1(e.target.value)}
              className="pointer block appearance-none w-full border border-gray-800 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            >
              <option>---</option>
              <option>Nothing</option>
              <option>Chicken or Other Fowl</option>
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
            <select
              onChange={e => setOption2(e.target.value)}
              className="pointer block appearance-none w-full border border-gray-800 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            >
              <option>---</option>
              <option>Yes</option>
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
            <select
              onChange={e => setOption3(e.target.value)}
              className="pointer block appearance-none w-full border border-gray-800 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            >
              <option>---</option>
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
            onClick={onSubmitForm}
            className="duration-200 bg-red-800 hover:bg-red-700 text-gray-100 py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mx-auto mt-4"
          >
            Tell Me What To Drink
          </button>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default WhatToDrink;
