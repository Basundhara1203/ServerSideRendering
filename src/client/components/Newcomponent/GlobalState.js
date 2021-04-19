import React, { createContext, useReducer } from 'react';

import appReducer from './reducer';

const initialState = {
  employees: [
    {
      id: 1,
      name: "Sammy",
      location: "DigitalOcean",
      designation: "Shark"
    }
  ]
};

export const GlobalContext = createContext(initialState);
//export const ContextState = createContext();
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

function createEmployee(employee) {
    dispatch({
      type: "ADD_EMPLOYEE",
      payload: employee
    });
  }
  

  function editEmployee(employee) {
    dispatch({
      type: "EDIT_EMPLOYEE",
      payload: employee
    });
  }

  function removeEmployee(id) {
    dispatch({
      type: "REMOVE_EMPLOYEE",
      payload: id
    });
  }

  return (
      
    <GlobalContext.Provider
    value={[state, dispatch]}
       // editEmployee,
       // removeEmployee
      
    >
      {children}
    </GlobalContext.Provider>
  );
};