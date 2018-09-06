import React from 'react';
import { Route } from 'react-router-dom';

import { MainPage } from './pages/index';

import '../../scss/index.scss';

const App = ({ location }) => (
  <div className="fullscreen-slide">
    <Route exact location={location} path="/" component={MainPage} />
  </div>
)

export default App;
