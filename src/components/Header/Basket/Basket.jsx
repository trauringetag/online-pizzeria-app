import classes from './Basket.module.scss';
import { NavLink } from "react-router-dom";

const Basket = () => (
    <NavLink className={classes.basket} to={'/'}>
        <p><span>0</span> ₽ | <span>0</span></p>
    </NavLink>
);
export default Basket;