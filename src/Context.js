import React, { useState, useEffect } from 'react';

import varietalData from './data/varietalData';

const Context = React.createContext();

function ContextProvider({ children }) {
  const [allVarietals, setAllVarietals] = useState([]);

  useEffect(() => {
    setAllVarietals(varietalData);
  }, []);

  return (
    <Context.Provider value={{ allVarietals }}>{children}</Context.Provider>
  );
}

export { ContextProvider, Context };
