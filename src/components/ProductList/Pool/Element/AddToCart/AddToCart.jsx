import classes from './AddToCart.module.scss';
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

const AddToCart = props => {
    const [count, setCount] = useState(0);

    const onClickAddPizza = () => {
        if (count >= 9) return count;
        else setCount(count + 1);
    };

    return (
        <div className={classes.wrapper}>
            <p className={classes.price}>от { props.price } ₽</p>
            <button className={classes.add} onClick={ onClickAddPizza }>
                <AddIcon fontSize={'small'}/>
                <span>Добавить</span>
                { !count ? <></> : <div className={classes.count}><span>{ count }</span></div> }
            </button>
        </div>
    );
};
export default AddToCart;