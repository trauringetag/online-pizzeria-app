import classes from './Header.module.scss';
import LogoBlock from "./LogoBlock/LogoBlock";
import Basket from "./Basket/Basket";

const Header = () => (
    <>
        <header className={classes.wrapper}>
            <LogoBlock />
            <Basket />
        </header>
        <hr className={classes.line} />
    </>
);
export default Header;