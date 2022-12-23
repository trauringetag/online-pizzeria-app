import classes from './Logo.module.scss';
import { NavLink } from "react-router-dom";
import LogoIcon from "../../../assets/logo.svg";

const Logo = () => (
    <NavLink className={classes.logo} to={'/'}>
        <img className={classes.icon} src={ LogoIcon } alt={'Логотип'} />
        <div>
            <h1 className={classes.title}>Пиццерия</h1>
            <p className={classes.slogan}>веб-приложение для продажи пиццы</p>
        </div>
    </NavLink>
);
export default Logo;