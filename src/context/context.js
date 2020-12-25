import React, { createContext, useReducer } from "react";
import contextReducer from "./reducer";

const initialState = [];
export const ExpenseTarackerContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState);

  //Actions
  const deleteTransactions = (id) =>
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });

  const addTransaction = (transaction) =>
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });

  console.log(transactions);

  return (
    <ExpenseTarackerContext.Provider
      value={{ deleteTransactions, addTransaction }}
    >
      {children}
    </ExpenseTarackerContext.Provider>
  );
};
