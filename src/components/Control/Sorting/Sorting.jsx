import classes from './Sorting.module.scss';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState } from 'react';

const Sorting = () => {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(0);
    const list = ['популярности', 'цене', 'алфавиту'];
    const title = list[selected];

    const onClickList = (index) => {
        setSelected(index);
        setOpen(false);
    };

    const setActive = (index) =>
        selected === index ? `${classes.item} ${classes.active}` : classes.item;

    const displayList = list.map((value, index) =>
        <li key={index} onClick={() => onClickList(index)} className={setActive(index)}>{ value }</li>
    );

    return (
        <section className={classes.sorting}>
            <KeyboardArrowUpIcon style={{ transform: open ? 'rotate(180deg)' : 'unset', transition: '.5s ease' }}
            />
            <p className={classes.filter}>Сортировка по:</p>
            <button onClick={ () => setOpen(!open) } className={classes.group}>{ title }</button>
            { open && <ul className={classes.popup}>{ displayList }</ul> }
        </section>
    );
};
export default Sorting;