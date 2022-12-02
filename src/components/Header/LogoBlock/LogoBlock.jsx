import classes from './LogoBlock.module.scss';
import { NavLink } from "react-router-dom";
import Logo from "../../../assets/logo.svg";

const LogoBlock = () => (
    <NavLink className={classes.logo} to={'/'}>
        <img className={classes.icon} src={Logo} alt={'Логотип'} />
        <div>
            <h1 className={classes.title}>Пиццерия</h1>
            <p className={classes.slogan}>самая вкусная пицца во вселенной</p>
        </div>
    </NavLink>
);
export default LogoBlock;