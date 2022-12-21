import classes from './Home.module.scss';
import Control from "./Control/Control";
import PizzaPool from "./PizzaPool/PizzaPool";

const Home = () => (
    <>
        <Control />
        <h2 className={classes.title}>Все пиццы</h2>
        <PizzaPool />
    </>
);
export default Home;