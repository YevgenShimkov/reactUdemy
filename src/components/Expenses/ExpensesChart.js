import React from "react";

import Chart from "../Chart/Chart";

/**
 * Приходит массив данных
 * Групируеться каждый месяц Jan=>0, Feb=>1 как в массив
 * Value сумируеться за целый месяц и вноситься вместо 0 по умолчанию
 * @param {*filteredExpenses с Expenses.js} props 
 * @returns 
 */
const ExpensesChart = props => {
    //Массив обьектов, с месяцами и по умолчанию обьемом 0
    const chartDatePoints = [
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sep', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Des', value: 0 },
    ]

    //перебираем массив который зашел
    for (const expense of props.expenses) {
        const expenseMouth = expense.date.getMonth(); //starting at 0 => January => 0
        chartDatePoints[expenseMouth].value += expense.amount;
    }

    return <Chart dataPoints={chartDatePoints} /> // возвращаем диаграмму
};

export default ExpensesChart;