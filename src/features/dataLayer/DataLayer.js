import React, { createContext, useContext, useReducer } from 'react';

export const DataLayerContext = createContext();

export const DataLayer = ({reducer,initalState,children}) => {
    
  return (
    <DataLayerContext.Provider value={useReducer(reducer , initalState)}>
      {children}
    </DataLayerContext.Provider>
  )
}

export const DataLayerValue = () => useContext(DataLayerContext)