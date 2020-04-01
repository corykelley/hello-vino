import React, { useContext } from 'react';
import { Context } from '../Context';

import Form from '../components/Form';

import Footer from '../components/Footer';

const WhatToDrink = () => {
  const { visibility } = useContext(Context);
  console.log(visibility);

  return (
    <div className="relative w-8/12 mt-12 mb-4 mx-auto">
      <Form />
      {visibility === false ? <Footer /> : null}
    </div>
  );
};

export default WhatToDrink;
