import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './styles/app.css';

import Header from './components/Header';
import Home from './pages/Home';
import Varietals from './pages/Varietals';
import VarietalDetails from './components/VarietalDetails';
import RedVarietals from './pages/RedVarietals';
import WhiteVarietals from './pages/WhiteVarietals';
import WhatToDrink from './pages/WhatToDrink';

function App() {
  return (
    <div className="text-gray-800 text-lg">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/varietals">
          <Varietals />
        </Route>
        <Route path="/varietals/:varietalName">
          <VarietalDetails />
        </Route>
        <Route path="/reds">
          <RedVarietals />
        </Route>
        <Route path="/whites">
          <WhiteVarietals />
        </Route>
        <Route path="/what-to-drink">
          <WhatToDrink />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
