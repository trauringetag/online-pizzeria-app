import classes from './Basket.module.scss';
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Basket = () => (
    <NavLink className={classes.basket} to={'/'}>
        <p>
            <span>0</span>
            <span>₽</span>
            <span>|</span>
            <ShoppingCartIcon fontSize={'small'}/>
            <span>0</span>
        </p>
    </NavLink>
);
export default Basket;