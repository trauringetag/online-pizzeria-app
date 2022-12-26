import classes from './Pool.module.scss';
import Element from './Element/Element';
import { useState, useEffect } from "react";
import axios from 'axios';
import Skeleton from "./Skeleton/Skeleton";

const Pool = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get('https://63a5adca318b23efa79a90a6.mockapi.io/pizzas')
        .then(response => {
            setItems(response.data);
            setIsLoading(false);
        });
    }, []);

    const displayItems = items.map(item => <Element key={item.id} {...item} />);
    const displaySkeleton = [...new Array(9)].map((_, index) => <Skeleton key={index} />);

    return (
        <main className={classes.wrapper}>
            { isLoading ? displaySkeleton : displayItems }
        </main>
    );
};
export default Pool;