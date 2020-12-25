import React, { createContext } from "react";

export const ExpenseTarackerContext = createContext(initialState);

export const Provider = ({ children }) => {
  return (
    <ExpenseTarackerContext.Provider value={{ appName: "Expense Tracker" }}>
      {children}
    </ExpenseTarackerContext.Provider>
  );
};
