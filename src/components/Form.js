import React, { useState, useContext } from 'react';
import { Context } from '../Context';

import FormModal from '../components/modal/FormModal';
import { onSubmitForm } from './onSubmitForm';

const Form = () => {
  const [food, setFood] = useState('---');
  const [occasion, setOccasion] = useState('---');
  const [season, setSeason] = useState('---');

  const { visibility, setVisibility } = useContext(Context);

  const recommendation = onSubmitForm(food, occasion, season);

  const handleFood = e => {
    setFood(e.target.value);
  };

  const handleOccasion = e => {
    setOccasion(e.target.value);
  };

  const handleSeason = e => {
    setSeason(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (food === '---' || occasion === '---' || season === '---') {
      alert('Please select all options!');
    } else {
      onSubmitForm(food, occasion, season);
      setVisibility(true);
    }
  };

  const closeModal = () => {
    setVisibility(false);
    window.location.reload(false);
  };

  return (
    <div>
      <div
        className={
          visibility === true
            ? 'mb-40 opacity-0 mt-4 mx-auto'
            : 'mb-4 mt-4 mx-auto'
        }
      >
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
                onChange={handleFood}
                defaultValue={food}
                className="pointer block appearance-none w-full border border-gray-800 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="---">---</option>
                <option value="nothing">Nothing</option>
                <option value="fowl">Chicken or Other Fowl</option>
                <option value="red meat">Red Meat</option>
                <option value="fish">Fish</option>
                <option value="cheese">Cheese</option>
                <option value="something spicy">Something Spicy</option>
                <option value="pasta">Pasta</option>
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
                onChange={handleOccasion}
                defaultValue={occasion}
                className="pointer block appearance-none w-full border border-gray-800 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="---">---</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
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
                onChange={handleSeason}
                defaultValue={season}
                className="pointer block appearance-none w-full border border-gray-800 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="---">---</option>
                <option value="spring">Spring</option>
                <option value="summer">Summer</option>
                <option value="fall">Fall</option>
                <option value="winter">Winter</option>
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
              onClick={handleSubmit}
              className="duration-200 bg-red-800 hover:bg-red-700 text-gray-100 py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mx-auto mt-4"
            >
              Tell Me What To Drink
            </button>
          </div>
        </form>
      </div>
      {visibility === true ? (
        <FormModal closeModal={closeModal} recommendation={recommendation} />
      ) : null}
    </div>
  );
};

export default Form;
