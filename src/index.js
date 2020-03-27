import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

import { ContextProvider } from './Context';
import App from './App';
import ScrollToTop from './components/ScrollToTop';

ReactDOM.render(
  <ContextProvider>
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  </ContextProvider>,
  document.getElementById('root')
);
