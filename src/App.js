import classes from './App.module.scss';
import Header from "./components/Header/Header";
import Control from "./components/Control/Control";
import PizzaPool from "./components/PizzaPool/PizzaPool";

const App = () => (
    <div className={classes.wrapper}>
        <section className={classes.container}>
            <Header />
            <Control />
            <h2 className={classes.title}>Все пиццы</h2>
            <PizzaPool />
        </section>
    </div>
);
export default App;