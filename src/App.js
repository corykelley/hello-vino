import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './styles/app.css';

import Header from './components/Header';
import Home from './pages/Home';
import Varietals from './pages/Varietals';
import VarietalDetails from './pages/VarietalDetails';
import RedVarietals from './pages/RedVarietals';

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
      </Switch>
    </div>
  );
}

export default App;
