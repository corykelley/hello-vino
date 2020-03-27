import React, { useContext } from 'react';

import { Context } from '../Context';
import VarietalCard from '../components/VarietalCard';

const Varietals = () => {
  const { allVarietals } = useContext(Context);

  const whites = allVarietals
    .filter(white => white.color === 'White')
    .map(white => {
      return (
        <div key={white.name}>
          <VarietalCard varietal={white} />
        </div>
      );
    });

  return (
    <div className="container align-center my-4 mx-auto p-2 grid grid-cols-1 gap-4 sm:grid-cols-2">
      {whites}
    </div>
  );
};

export default Varietals;
