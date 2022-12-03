import classes from './Bottom.module.scss';
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

const Bottom = () => {
    const [count, setCount] = useState(0);

    const onClickAddPizza = () => {
        if (count >= 9) return count;
        else setCount(count + 1);
    };

    return (
        <div className={classes.bottom}>
            <p className={classes.price}>от 499 ₽</p>
            <button className={classes.add} onClick={ onClickAddPizza }>
                <AddIcon fontSize={'small'}/>
                <span>Добавить</span>
                { count === 0 ? <></> : <span className={classes.count}>{ count }</span> }
            </button>
        </div>
    );
};
export default Bottom;