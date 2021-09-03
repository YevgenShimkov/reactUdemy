import React from 'react';

import './ExpensesFilter.css';

/**
 * задаем возможные года для фильтра
 * @returns поле выбора года для фильтра
 */
const ExpensesFilter = (props) => {
    //через props обращаемся к функции родителя и передаем туда выбранный год
    const dropdownChangeHandler = (event) => {
        props.onChoiceFilter(event.target.value)
    };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} /* год по умолчанию вытягиваем с опций */ onChange={dropdownChangeHandler}>  {/* добавляем прослушку на изменения и когда будет выбран год, запустится dropdownChangeHandler*/}
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;