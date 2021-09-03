import React, { useState} from "react";

import ExpanseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

/**
 * отрисовываем полученные исходные данные
 * так же, отсюда мы управляем ExpensesFilter, устанавливаем год поу молчанию и изменяем выбранный год
 * @param {данные расходов} props 
 * @returns 
 */
const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020') // по умолчанию

    const choiseFilterHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    // selected={filteredYear} добавляем атрибут, что бы можно было указывать год по умолчанию
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChoiceFilter={choiseFilterHandler}/>
                <ExpanseItem
                    title={props.item[0].title}
                    amount={props.item[0].amount}
                    date={props.item[0].date}>
                </ExpanseItem>
                <ExpanseItem
                    title={props.item[1].title}
                    amount={props.item[1].amount}
                    date={props.item[1].date}>
                </ExpanseItem>
                <ExpanseItem
                    title={props.item[2].title}
                    amount={props.item[2].amount}
                    date={props.item[2].date}>
                </ExpanseItem>
                <ExpanseItem
                    title={props.item[3].title}
                    amount={props.item[3].amount}
                    date={props.item[3].date}>
                </ExpanseItem>
            </Card>
        </div>
    );
}

export default Expenses;