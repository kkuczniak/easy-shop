import React, { createContext, useContext, useReducer } from 'react';

// Prepares
export const StateContext = createContext();

// Wrap app and provides Data Layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
//Pull information drom the data layer
export const useStateValue = () => useContext(StateContext);
