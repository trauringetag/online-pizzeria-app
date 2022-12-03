import classes from './PizzaElement.module.scss';
import AddIcon from "@mui/icons-material/Add";

const PizzaElement = () => (
    <article className={classes.product}>
        <img className={classes.image} src={'https://placehold.co/260'} alt={'Изображение пиццы'} />
        <h3 className={classes.title}>Название пиццы</h3>
        <div className={classes.selectors}>
            <ul className={classes.dough}>
                <li className={`${classes.item} ${classes.active}`}>тонкое</li>
                <li className={classes.item}>традиционное</li>
            </ul>
            <ul className={classes.size}>
                <li className={`${classes.item} ${classes.active}`}>26 см.</li>
                <li className={classes.item}>30 см.</li>
                <li className={classes.item}>40 см</li>
            </ul>
        </div>
        <div className={classes.bottom}>
            <p className={classes.price}>Цена</p>
            <button className={classes.add}>
                <AddIcon fontSize={'small'}/>
                <span>Добавить</span>
            </button>
        </div>
    </article>
);
export default PizzaElement;