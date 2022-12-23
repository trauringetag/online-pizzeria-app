import classes from './CartButton.module.scss';
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartButton = () => (
    <NavLink className={classes.wrapper} to={'/cart'}>
        <p>
            <span>0</span>
            <span>₽</span>
            <span>|</span>
            <ShoppingCartIcon fontSize={'small'}/>
            <span>0</span>
        </p>
    </NavLink>
);
export default CartButton;