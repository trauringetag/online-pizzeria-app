import classes from './PizzaPool.module.scss';
import PizzaElement from "./PizzaElement/PizzaElement";
import database from '../../assets/database.json';

const PizzaPool = () => {
        const displayDatabase = database.map(item => <PizzaElement key={item.id} {...item}/>);
        return <main className={classes.pool}>{ displayDatabase }</main>;
};
export default PizzaPool;