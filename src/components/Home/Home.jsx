import classes from './Home.module.scss';
import Control from "./Control/Control";
import Pool from "./Pool/Pool";

const Home = () => (
    <>
        <Control />
        <h2 className={classes.title}>Все пиццы</h2>
        <Pool />
    </>
);
export default Home;