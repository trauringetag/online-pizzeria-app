import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home/Home";

const App = () => (
    <Routes>
        <Route path={'/'} element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path={'online-pizzeria-app'} element={<Navigate to={'/'} />} />
            <Route path={'*'} element={<div>Error 404</div>} />
        </Route>
    </Routes>
);
export default App;