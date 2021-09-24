import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css'; // импорт css файла.
/**
 *  компонент
 * рисуем как будет выглядеть строка
 * @returns 
 */
const ExpanseItem = (props) => {

    /**
     * меняет титул по нажатию кнопки
     */
    // const [title, setTitle] = useState(props.title); // отслеживаем состояние props.title  
    // const clickHandler = ()=> {
    //     setTitle('Updated');
    // };

    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date} /> {/* просто создаем компонент даты. что бы всё в кучке */}
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">${props.amount}</div>
                </div>
                {/* <button onClick= {clickHandler}>Change Title</button> */}
            </Card>
        </li>
    )
}

export default ExpanseItem;