import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Context = createContext();

const DataProvider = ({ children }) => {

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
