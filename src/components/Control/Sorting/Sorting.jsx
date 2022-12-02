import classes from './Sorting.module.scss';
import EjectIcon from "@mui/icons-material/Eject";

const Sorting = () => (
    <div className={classes.sorting}>
        <EjectIcon fontSize={'small'} />
        <p className={classes.filter}>Сортировка по:</p>
        <p className={classes.group}>популярности</p>
    </div>
);
export default Sorting;