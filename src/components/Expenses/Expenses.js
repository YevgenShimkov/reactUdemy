import React, { useState } from "react";

import ExpenseList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

/**
 * отрисовываем полученные исходные данные
 * так же, отсюда мы управляем ExpensesFilter, устанавливаем год поу молчанию и изменяем выбранный год
 * @param {данные расходов item={expenses} }  props 
 * @returns 
 */
const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020') // по умолчанию

    // когда в фильтре выбираем другой год, перерисовывается выбранный год
    const choiseFilterHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    /**
     * создаем фильтр по указанному году
     * основной массив не изменяеться
     * expense.date будут только те расходы, которые сделаны в указанном году
     */
    const filteredExpenses = props.item.filter(expense => {
        if(filteredYear==='all') {
            return expense.date;
        }
        return expense.date.getFullYear().toString() === filteredYear;
    });

    // selected={filteredYear} добавляем атрибут, что бы можно было указывать год по умолчанию
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChoiceFilter={choiseFilterHandler} />
                <ExpensesChart expenses= {filteredExpenses}/>
                <ExpenseList items= {filteredExpenses} /> {/*  как параметр передаем отфильтрованные данные по году */}
            </Card>
        </div>
    );
}

export default Expenses;