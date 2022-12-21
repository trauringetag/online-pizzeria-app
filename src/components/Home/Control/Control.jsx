import classes from './Control.module.scss';
import Categories from "./Categories/Categories";
import Sorting from "./Sorting/Sorting";

const Control = () => (
    <div className={classes.wrapper}>
        <Categories />
        <Sorting />
    </div>
);
export default Control;