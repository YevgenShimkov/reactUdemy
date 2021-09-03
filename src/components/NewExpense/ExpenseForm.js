import React, { useState } from 'react';

import './ExpenseForm.css';

/**
 * отправка формы на добавление нового элемента
 */
const ExpenseForm = (props) => { // props - its - onSaveExpenseData
    const [enteredTitle, setEnteredTitle] = useState(''); // пусто потому, что изначально он пустой
    const [enteredAmount, setEnteredAmount] = useState(''); // пусто потому, что изначально он пустой
    const [enteredDate, setEnteredDate] = useState(''); // пусто потому, что изначально он пустой

    // Alternative что бы не писать три разных состояния трех разных пременных
    // const [userInput, setUserInput] = useState({ 
    //     // создается обьект  с соответствующими понялми
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    /**
     * смена титула, даты, суммы
     * @param {событие которое произоршло} event 
     */
    const titleChangeHandler = (event) => { // event это событие, которое произошло
        setEnteredTitle(event.target.value);
        // Alternative 1
        // setUserInput({
        //     ...userInput, // сначала перезаписываем все значения, что бы не потерялись
        //     enteredTitle: event.target.value, // меняем нужное нам значение
        // });
        // Alternative 2 (better, в случае когда мы учитываем предыдущие состояния, этот метод безопасней)
        // setUserInput((prevState) => { // как аргумент получаем, предыдущее состояние 
        //     return {...prevState, enteredTitle: event.target.value}; //сначала перезаписываем старые данные, потом меняем нужную нам строку
        // });
    }

    const amountChangeHandler = event => { // event это событие, которое произошло
        setEnteredAmount(event.target.value);
    }

    const dateChangeHandler = (event) => { // event это событие, которое произошло
        setEnteredDate(event.target.value);
    }

    /**
     * при отправки формы, формируем новый обьект со всеми данными 
     * @param {нажата кнопка отправки формы} event 
     */
    const submitHandler = (event) => {
        event.preventDefault(); // прерываем дефолтное поведение браузера

        const expenseDate = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate) // через конструктор, что бы дата преобразовалась
        }

        props.onSaveExpenseData(expenseDate); // мы переходим в функцию в NewExpense.js foo onSaveExpanseDataHandler
        /**
         * обнуляем поля
         */
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

    };

    return <form onSubmit={submitHandler}> {/* отслеживаем отправку формы */}
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label>amount</label>
                <input type="number" min="0.01" step='0.01' value={enteredAmount} onChange={amountChangeHandler} />
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type="date" min='2019-01-01' max='2022-12-31' value={enteredDate} onChange={dateChangeHandler} />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type='submit'  >Add Exprense</button>
        </div>
    </form>
};

export default ExpenseForm;