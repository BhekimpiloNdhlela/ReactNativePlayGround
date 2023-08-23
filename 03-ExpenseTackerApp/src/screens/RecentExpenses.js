import { useContext, useEffect, useState } from 'react';

import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import Loading from '../components/ui/Loading';
import { ExpensesContext } from '../store/expense-context';
import { getDateMinusDays } from '../utils/utils';
import { getExpenses } from '../utils/api';

function RecentExpenses() {
  const expensesCtx = useContext(ExpensesContext);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchExpenses = async () => {
      const expenses = await getExpenses();
      expensesCtx.addExpenses(expenses)
      setLoading(false);
    }
    fetchExpenses();
  }, []);

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date >= date7DaysAgo && expense.date <= today;
  });

  return (
    <>
      {loading ? <Loading /> :
        <ExpensesOutput
          expenses={recentExpenses}
          expensesPeriod="Last 7 Days"
          fallbackText="No expenses registered for the last 7 days."
        />
      }
    </>
  );
}

export default RecentExpenses;