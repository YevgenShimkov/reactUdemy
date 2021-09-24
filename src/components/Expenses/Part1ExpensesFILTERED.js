import React, { useState } from "react";

import ExpanseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

/**
 * отрисовываем полученные исходные данные
 * так же, отсюда мы управляем ExpensesFilter, устанавливаем год поу молчанию и изменяем выбранный год
 * @param {данные расходов item={expenses} }  props 
 * @returns 
 */
const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020') // по умолчанию

    const choiseFilterHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    /**
     * создаем фильтр по указанному году
     * основной массив не изменяеться
     */
    const filteredExpenses = props.item.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    // selected={filteredYear} добавляем атрибут, что бы можно было указывать год по умолчанию
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChoiceFilter={choiseFilterHandler} />
                 {filteredExpenses.map((expense) => ( // перебираем массив и отрисовываем отфильтрованные элементы
                /*{props.item.map((expense)=>( перебираем массив и отрисовываем элементы без выборки*/
                    <ExpanseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))} 
            </Card>
        </div>
    );
}

export default Expenses;