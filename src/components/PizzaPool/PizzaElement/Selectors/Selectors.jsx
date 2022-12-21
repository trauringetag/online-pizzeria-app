import classes from './Selectors.module.scss';
import { useState } from 'react';

const Selectors = props => {
    const [size, setSize] = useState(0);
    const [dough, setDough] = useState(0);
    const doughs = ['тонкое', 'традиционное'];

    const setCurrentSize = (index) =>
        size === index ? `${classes.item} ${classes.active}` : classes.item;
    const setCurrentDough = (index) =>
        dough === index ? `${classes.item} ${classes.active}` : classes.item;

    const displaySizes = props.sizes.map((value, index) =>
        <li onClick={() => setSize(index)}
            key={index}
            className={setCurrentSize(index)}
        >
            { value } см.
        </li>
    );
    const displayDoughs = props.types.map((value, index) =>
        <li onClick={() => setDough(index)}
            key={index}
            className={setCurrentDough(index)}
        >
            { doughs[value] }
        </li>
    );

    return (
        <div className={classes.wrapper}>
            <ul className={classes.dough}>{ displayDoughs }</ul>
            <ul className={classes.size}>{ displaySizes }</ul>
        </div>
    );
};
export default Selectors;