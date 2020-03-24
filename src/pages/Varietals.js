import React, { useContext } from 'react';

import { Context } from '../Context';
import VarietalCard from '../components/VarietalCard';

const Varietals = () => {
  const { allVarietals } = useContext(Context);

  const varietalCards = allVarietals.map(varietal => (
    <div key={varietal.name}>
      <VarietalCard varietal={varietal} />
    </div>
  ));

  return (
    <div className="container align-center my-4 mx-auto p-2 grid grid-cols-1 gap-4 sm:grid-cols-2">
      {varietalCards}
    </div>
  );
};

export default Varietals;
