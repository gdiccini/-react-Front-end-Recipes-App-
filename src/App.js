import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Meals from './pages/Meals';

import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/comidas" component={ Meals } />
        <Route exact path="/" component={ Login } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
