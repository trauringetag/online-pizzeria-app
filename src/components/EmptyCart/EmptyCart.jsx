import classes from './EmptyCart.module.scss';
import EmptyCartImage from '../../assets/empty-cart.svg';
import { useNavigate } from "react-router-dom"

const EmptyCart = () => {
    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    return (
        <main className={classes.wrapper}>
            <div>
                <h3 className={classes.title}>Корзина пустая 😕</h3>
                <p className={classes.description}>Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать пиццу, перейди на главную страницу.</p>
            </div>
            <img className={classes.image} src={ EmptyCartImage } alt={'Изображение'} />
            <button className={classes.button} onClick={ goBack }>Вернуться назад</button>
        </main>
    );
};
export default EmptyCart;