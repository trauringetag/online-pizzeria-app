import classes from './App.module.scss';
import Header from "./components/Header/Header";

const App = () => (
    <div className={classes.container}>
        <div className={classes.wrapper}>
            <Header />
        </div>
    </div>
);
export default App;