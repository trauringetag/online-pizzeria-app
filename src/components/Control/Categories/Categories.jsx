import classes from './Categories.module.scss';
import { useState } from 'react';

const Categories = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const setActive = (index) =>
        activeIndex === index ? `${classes.item} ${classes.active}` : classes.item;

    const categories = ['Все', 'Мясные', 'Вегетерианские', 'Гриль', 'Острые', 'Закрытые'];
    const displayCategories = categories.map((item, index) =>
        <li key={index}
            onClick={() => setActiveIndex(index)}
            className={setActive(index)}
        >
            { item }
        </li>
    );

    return <ul className={classes.categories}>{ displayCategories }</ul>;
};
export default Categories;