import React, { createContext, useReducer } from "react";
import contextReducer from "./reducer";

const initialState = JSON.parse(localStorage.getItem("transactions")) || [];
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

  const balance = transactions.reduce(
    (accumulator, currentValue) =>
      currentValue.type === "Expense"
        ? accumulator - currentValue.amount
        : accumulator + currentValue.amount,
    0
  );

  return (
    <ExpenseTarackerContext.Provider
      value={{ deleteTransaction, addTransaction, transactions, balance }}
    >
      {children}
    </ExpenseTarackerContext.Provider>
  );
};
