import React from "react";

import ChartBar from './ChartBar';
import './Chart.css';

/**
 * создаем столбцы
 * 
 * @param {*} props 
 */
const Chart = props => {
    //перебираем обьект и создаем массив с числами, каждый месяц это сумма его покупок
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    // ... позволяет записать каждое число не массивом, а аргументами через запятую. Что бы Math.max нашел макс значение
    const totalMaximum = Math.max(...dataPointValues);

    return <div className='chart'>
        {props.dataPoints.map(dataPoint =>
            <ChartBar
                key={dataPoint.label} /* названия месяцев будут ID */
                value={dataPoint.value}
                maxValue={totalMaximum}
                label={dataPoint.label} /* названия месяца */ />)}
    </div>
};

export default Chart;