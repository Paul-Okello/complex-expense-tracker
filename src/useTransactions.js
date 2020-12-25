const { useContext } = require("react");
const {
  resetCategories,
  expenseCategories,
  incomeCategories,
} = require("./constants/categories");

const { ExpenseTarackerContext } = require("./context/context");

const useTransactions = (title) => {
  resetCategories();

  const { transactions } = useContext(ExpenseTarackerContext);

  //filter transactions
  const transactionsPerType = transactions.filter((t) => t.type === title);

  //Accumulate total
  const total = transactionsPerType.reduce(
    (accumulator, currentValue) => accumulator + currentValue.amount,
    0
  );

  const categories = title === "Income" ? incomeCategories : expenseCategories;

  transactionsPerType.forEach((t) => {
    const category = categories.find((c) => c.type === t.category);

    //Increment the amount for Each Category
    if (category) {
      category.amount += t.amount;
    }
  });

  //Remove categories 0 or less than 0
  const filteredCategories = categories.filter((c) => c.amount > 0);

  //Chart Data
  const chartData = {
    datasets: [
      {
        data: filteredCategories.map((c) => c.amount),
        backgroundColor: filteredCategories.map((c) => c.color),
      },
    ],
    labels: filteredCategories.map((c) => c.type),
  };

  return { total, chartData };
};

export default useTransactions;
