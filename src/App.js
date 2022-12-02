import classes from './App.module.scss';
import Header from "./components/Header/Header";
import Control from "./components/Control/Control";

const App = () => (
    <div className={classes.container}>
        <div className={classes.wrapper}>
            <Header />
            <Control />
        </div>
    </div>
);
export default App;