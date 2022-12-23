import classes from './Pool.module.scss';
import Element from "./Element/Element";
import database from '../../../assets/database.json';

const Pool = () => {
        const displayDatabase = database.map(item => <Element key={item.id} {...item}/>);
        return <main className={classes.pool}>{ displayDatabase }</main>;
};
export default Pool;