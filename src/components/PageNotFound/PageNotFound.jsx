import classes from './PageNotFound.module.scss';
import PageNotFoundImage from "../../assets/page-not-found.svg";
import { NavLink } from "react-router-dom";

const PageNotFound = () => (
    <main className={classes.wrapper}>
        <div>
            <h3 className={classes.title}>Страница не найдена 😕</h3>
            <p className={classes.description}>Кажется что-то пошло не так! Страница, которую вы запрашиваете, не существует. Возможно она устарела, была удалена, или был введён неверный адрес в адресной строке.</p>
        </div>
        <img className={classes.image} src={PageNotFoundImage} alt={'Изображение'} />
        <NavLink className={classes.button} to={'/'}>На главную</NavLink>
    </main>
);
export default PageNotFound;