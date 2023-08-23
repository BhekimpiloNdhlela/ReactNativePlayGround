import { useContext, useLayoutEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import ExpenseForm from '../components/ManageExpense/ExpenseForm';
import IconButton from '../components/ui/IconButton';
import { GlobalStyles } from '../constants/styles';
import { ExpensesContext } from '../store/expense-context';
import { deleteExpense, postExpense, updateExpense } from '../utils/api';
import Loading from '../components/ui/Loading';

function ManageExpense({ route, navigation }) {
  const expensesCtx = useContext(ExpensesContext);

  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  const selectedExpense = expensesCtx.expenses.find(
    (expense) => expense.id === editedExpenseId
  );

  const [loading, setLoading] = useState(false);
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, isEditing]);

  const deleteExpenseHandler = async () => {
    setLoading(true);
    expensesCtx.deleteExpense(editedExpenseId);
    await deleteExpense(editedExpenseId);
    navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
  }

  const confirmHandler = async (expenseData) => {
    setLoading(true);
    if (isEditing) {
      expensesCtx.updateExpense(editedExpenseId, expenseData);
      await updateExpense(editedExpenseId, expenseData);
    } else {
      const id = await postExpense(expenseData);
      expensesCtx.addExpense({ ...expenseData, id: id });
    }
    navigation.goBack();
  }

  return (
    <>
      {loading ? <Loading /> :
        <View style={styles.container}>
          <ExpenseForm
            submitButtonLabel={isEditing ? 'Update' : 'Add'}
            onSubmit={confirmHandler}
            onCancel={cancelHandler}
            defaultValues={selectedExpense}
          />
          {isEditing && (
            <View style={styles.deleteContainer}>
              <IconButton
                icon="trash"
                color={GlobalStyles.colors.error500}
                size={36}
                onPress={deleteExpenseHandler}
              />
            </View>
          )}
        </View>
      }
    </>
  );
}

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center',
  },
});