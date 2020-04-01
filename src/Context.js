import React, { useState, useEffect } from 'react';

import varietalData from './data/varietalData';

const Context = React.createContext();

function ContextProvider({ children }) {
  const [allVarietals, setAllVarietals] = useState([]);

  const [visibility, setVisibility] = useState(false);

  useEffect(() => {
    setAllVarietals(varietalData);
  }, []);

  return (
    <Context.Provider
      value={{
        allVarietals,
        visibility,
        setVisibility
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
