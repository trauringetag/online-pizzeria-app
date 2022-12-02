import classes from './Control.module.scss';
import Categories from "./Categories/Categories";
import Sorting from "./Sorting/Sorting";

const Control = () => (
    <section className={classes.wrapper}>
        <Categories />
        <Sorting />
    </section>
);
export default Control;