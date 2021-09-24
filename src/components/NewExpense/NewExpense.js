import React, { useState } from "react";

import ExpanseForm from './ExpenseForm';
import './NewExpense.css';

/**
 * Форма, для добавления новой строки расходов
 * props функция с App.js addExpenseHandler
 * @returns 
 */
const NewExpense = (props) => {
    // переменная которая следит за состоянием нажата кнопка или нет
    const [isEditing, setIsEditing] = useState(false); // задаем изначальное стостояние

    const onSaveExpanseDataHandler = (enteredExpenseData) => { // enteredExpenseData новые данные которые ввел пользователь
        const expenseDate = {
            ...enteredExpenseData,
            id: Math.random().toString() // присваиваем рендомный id
        };
        props.onAddExpense(expenseDate); // stateUp мы передаем данные родителю
        setIsEditing(false); // когда отправляем форму, тоже возвращаем кнопку Add можно записать как stopEditingHandler();
    }

    // меняем состояние на true
    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }

    return <div className="new-expense">
        {/* определяем какую форму показывать. */}
        {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>} {/* когда нажата кнопка, тогда запускается функция которая меняет состояние */}
        {isEditing && <ExpanseForm onSaveExpenseData={onSaveExpanseDataHandler} onCancel={stopEditingHandler} />}{/* как значение мы передаем функцию */}
    </div>
};

export default NewExpense;