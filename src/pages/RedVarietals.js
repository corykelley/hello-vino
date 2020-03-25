import React, { useContext } from 'react';

import { Context } from '../Context';
import VarietalCard from '../components/VarietalCard';

const Varietals = () => {
  const { allVarietals } = useContext(Context);

  const reds = allVarietals.map(red => {
    if (red.color === 'Red') {
      return (
        <div key={red.name}>
          <VarietalCard varietal={red} />
        </div>
      );
    }
  });

  return (
    <div className="container align-center my-4 mx-auto p-2 grid grid-cols-1 gap-4 sm:grid-cols-2">
      {reds}
    </div>
  );
};

export default Varietals;
