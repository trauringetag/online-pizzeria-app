import classes from './Element.module.scss';
import Selectors from "./Selectors/Selectors";
import AddToCart from "./AddToCart/AddToCart";

const Element = ({ imageUrl, name, sizes, types, price }) => (
    <article className={classes.product}>
        <img className={classes.image}
             src={ imageUrl }
             alt={'Изображение'}
        />
        <h3 className={classes.title}>{ name }</h3>
        <Selectors sizes={ sizes } types={ types } />
        <AddToCart price={ price } />
    </article>
);
export default Element;