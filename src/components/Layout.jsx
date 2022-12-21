import classes from './Layout.module.scss';
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";

const Layout = () => (
    <div className={classes.wrapper}>
        <section className={classes.container}>
            <Header />
            <Outlet />
        </section>
    </div>
);
export default Layout;