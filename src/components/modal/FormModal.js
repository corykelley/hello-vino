import React from 'react';

import Recommendation from '../Recommendation';

const FormModal = ({ recommendation, closeModal }) => {
  return (
    <div className="mb-8">
      {recommendation === undefined ? null : (
        <Recommendation
          recommendation={recommendation}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default FormModal;
