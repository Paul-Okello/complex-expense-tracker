import React from "react";

const isIncome = Math.round(Math.random());

const InfoCard = () => {
  return (
    <div style={{ textAlign: "center", padding: "0 10%" }}>
      Try Saying: <br />
      Add {isIncome ? "Income " : "Expense "}
      for {isIncome ? "Ksh 1000 " : "Ksh 500 "}
      in category {isIncome ? "Business " : "House "}
      for {isIncome ? "Monday " : "Tuesday "}
    </div>
  );
};

export default InfoCard;
