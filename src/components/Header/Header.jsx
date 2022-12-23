import classes from './Header.module.scss';
import Logo from "./Logo/Logo";
import CartButton from "./CartButton/CartButton";

const Header = () => (
    <>
        <header className={classes.wrapper}>
            <Logo />
            <CartButton />
        </header>
        <hr className={classes.line} />
    </>
);
export default Header;