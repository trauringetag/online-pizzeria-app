import classes from './Layout.module.scss';
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";
import { BackToTop } from "./CommonComponents/BackToTop";

const Layout = () => (
    <div className={classes.wrapper} id={'wrapper'}>
        <section className={classes.container}>
            <Header />
            <Outlet />
            <BackToTop />
        </section>
    </div>
);
export default Layout;