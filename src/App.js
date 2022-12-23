import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import ProductList from "./components/ProductList/ProductList";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import EmptyCart from "./components/EmptyCart/EmptyCart";

const App = () => (
    <Routes>
        <Route path={'/'} element={<Layout />}>
            <Route index element={<ProductList />}/>
            <Route path={'online-pizzeria-app'} element={<Navigate to={'/'} />} />
            <Route path={'*'} element={<PageNotFound />} />
            <Route path={'/cart'} element={<EmptyCart />} />
        </Route>
    </Routes>
);
export default App;