import React from "react";

import ExpanseItem from "./ExpenseItem";
import "./ExpensesList.css"

/**
 * НА случай если нет данных для отображения, добавляем по умолчанию надпись
 * 
 */
const ExpenseList = props => {
    // если отфильтрованых данных нет, то возвращаем надпись
    if (props.items.length === 0) {
        return <h2 className='expenses-list__fallback'>Found no expenses</h2>
    }

    // если даные есть, выводим их
    return (
        <ul className='expenses-list'>
            {props.items.map((expense) => (
                <ExpanseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </ul>
    );
};

export default ExpenseList;