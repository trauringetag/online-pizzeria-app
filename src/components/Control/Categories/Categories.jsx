import classes from './Categories.module.scss';

const Categories = () => (
    <ul className={classes.categories}>
        <li className={`${classes.item} ${classes.active}`}>Все</li>
        <li className={classes.item}>Мясные</li>
        <li className={classes.item}>Вегетерианские</li>
        <li className={classes.item}>Гриль</li>
        <li className={classes.item}>Острые</li>
        <li className={classes.item}>Закрытые</li>
    </ul>
);
export default Categories;