import React from "react";

import ExpanseForm from './ExpenseForm';
import './NewExpense.css';

/**
 * новая строка расходов
 * 
 * @returns 
 */
const NewExpense = (props) => {
    const onSaveExpanseDataHandler = (enteredExpenseData) => {
        const expenseDate = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseDate); // stateUp мы передаем данные родителю
    }

    return <div className="new-expense">
            <ExpanseForm onSaveExpenseData = {onSaveExpanseDataHandler} /> {/* как значение мы передаем функцию */}
    </div>
};

export default NewExpense;