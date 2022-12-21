import classes from './PizzaElement.module.scss';
import Selectors from "./Selectors/Selectors";
import Bottom from "./Bottom/Bottom";

const PizzaElement = ({ imageUrl, name, sizes, types, price }) => (
    <article className={classes.product}>
        <img className={classes.image}
             src={ imageUrl }
             alt={'Изображение пиццы'}
        />
        <h3 className={classes.title}>{ name }</h3>
        <Selectors sizes={ sizes } types={ types } />
        <Bottom price={ price } />
    </article>
);
export default PizzaElement;