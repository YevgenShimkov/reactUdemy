/**
 * 
 * @returns по сути мы создали функцию, которая возвращает разметку HTML
 *  И этот файл App.js и есть компонентом
 */
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

/**
 * функция которая принимает новые данные
 * @returns 
 */

const addExpenseHandler = expense => { // expense это NewExpense.js props.onAddExpense(expenseDate);
  console.log('in App.js');
  console.log(expense);
};

/** 
 * основной запуск
 * передаем данные для заполнения данными расходов
 * @returns 
 */
const App = () => {
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/> {/*  когда сработает NewExpense тогда и сработает addExpenseHandler */}
      {/* отрисовываем HTML на основе полученных данных expenses, expenses в даном случае отправляються как параметр в Expenses.js */}
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
