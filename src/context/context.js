import React, { createContext, useReducer } from "react";
import contextReducer from "./reducer";

const initialState = [];
export const ExpenseTarackerContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState);

  //Actions
  const deleteTransaction = (id) =>
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });

  const addTransaction = (transaction) =>
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });

  return (
    <ExpenseTarackerContext.Provider
      value={{ deleteTransaction, addTransaction, transactions }}
    >
      {children}
    </ExpenseTarackerContext.Provider>
  );
};
