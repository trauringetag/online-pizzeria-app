import classes from './ProductList.module.scss';
import Control from "./Control/Control";
import Pool from "./Pool/Pool";

const ProductList = () => (
    <>
        <Control />
        <h2 className={classes.title}>Все пиццы</h2>
        <Pool />
    </>
);
export default ProductList;