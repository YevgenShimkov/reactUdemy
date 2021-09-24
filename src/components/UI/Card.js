import './Card.css';

/**
 * Просто еще один вид компонента
 * Компонент-обвертка.
 * По сути мы взяли несколько CSS стилей и задали их обвертке
 * @param {*} props 
 * @returns 
 */
const Card = (props) => {
    const classes = 'card ' + props.className; // передаем название вложенного div
    return <div className={classes}>{props.children}</div>; // children здесь, это всё, что между {} в коде.
}

export default Card; 