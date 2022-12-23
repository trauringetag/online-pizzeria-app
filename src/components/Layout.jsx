import classes from './Layout.module.scss';
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";
import { BackToTopButton } from "./CommonComponents/BackToTopButton";

const Layout = () => (
    <div className={classes.wrapper} id={'wrapper'}>
        <div className={classes.container}>
            <Header />
            <Outlet />
            <BackToTopButton />
        </div>
    </div>
);
export default Layout;