import classes from './Pool.module.scss';
import Element from './Element/Element';
import { useState, useEffect } from "react";
import axios from 'axios';

const Pool = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('https://63a5adca318b23efa79a90a6.mockapi.io/pizzas')
        .then(response => {
            setItems(response.data);
        });
    }, []);

    const displayItems = items.map(item => <Element key={item.id} {...item} />);

    return <main className={classes.wrapper}>{ displayItems }</main>;
};
export default Pool;