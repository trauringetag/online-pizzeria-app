import classes from './PizzaElement.module.scss';
import Selectors from "./Selectors/Selectors";
import Bottom from "./Bottom/Bottom";

const PizzaElement = () => (
    <article className={classes.product}>
        <img className={classes.image}
             src={'https://placehold.co/260'}
             alt={'Изображение пиццы'}
        />
        <h3 className={classes.title}>Название пиццы</h3>
        <Selectors />
        <Bottom />
    </article>
);
export default PizzaElement;