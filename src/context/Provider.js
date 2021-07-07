import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { fetchDrinks, fetchMeals } from '../services/api';

const Context = createContext();

const DataProvider = ({ children }) => {
  const [meals, setMeals] = useState([]);
  fetchDrinks();
  const contex = {};


  return (
    <Context.Provider value={ contex }>
      {children}
    </Context.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Context, DataProvider };
