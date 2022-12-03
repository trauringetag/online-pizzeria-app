import classes from './Selectors.module.scss';

const Selectors = () => (
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
);
export default Selectors;