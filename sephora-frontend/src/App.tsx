import {Route, Routes} from "react-router-dom";
import CategoryListPage from "./components/admin/category/list/CategoryListPage";
import CategoryCreatePage from "./components/admin/category/create/CategoryCreatePage";
import CategoryEditPage from "./components/admin/category/edit/CategoryEditPage";
import AdminLayout from "./components/admin/container/AdminLayout";
import HomePage from "./components/home/HomePage";
import LoginPage from "./components/auth/login/LoginPage";
import RegisterPage from "./components/auth/register/RegisterPage";
import Loader from "./components/common/loader/Loader";
import DefaultLayout from "./components/admin/container/default/DefaultLayout";
import AdminDashboard from "./components/admin/dashboard/AdminDashboard"
import ProductsPage from "./components/home/productsPage/ProductsPage";
import Details from "./components/home/products/detailsProduct/Details";
import {DetailsProduct, Filter, Filters} from "./components/home/data";
import routes from './common/routes';
import Order from "./components/home/order/Order";
import Thank from "./components/home/order/thank/Thank";
import YourOrder from "./components/home/order/yourOrder/YourOrder";
import Profile from "./components/home/profile/Profile";
import { useSelector } from "react-redux";
import {IAuthUser } from "./components/auth/types";


function App() {
    const { user, isAuth } = useSelector((store: any) => store.auth as IAuthUser);

    return (
        <>
            <Loader/>
            <Routes>
                <Route path={routes.home} element={<DefaultLayout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={routes.login} element={<LoginPage/>}/>
                    <Route path={routes.register} element={<RegisterPage/>}/>
                    <Route path={routes.productDetails} element={<Details product={DetailsProduct}/>}/>
                    <Route path={routes.productsPage}
                           element={<ProductsPage title="Новинки" filters={Filters}
                           mainFilter={Filter}/>}/>
                           
                    <Route path={routes.order} element={<Order/>}/>
                    <Route path={routes.thank} element={<Thank/>}/>
                    <Route path={routes.detailsOrder} element={<YourOrder/>}/>
                    <Route path={routes.profile} element={<Profile/>}/>
                </Route>

                {user?.roles.find(x => x === "sudoAdmin")  && isAuth ? (
                <Route path={routes.admin} element={<AdminLayout/>}>
                    <Route index element={<AdminDashboard/>}/>
                    <Route path={routes.adminCategoriesList}>
                        <Route index element={<CategoryListPage/>}/>
                        <Route path={routes.createCategory} element={<CategoryCreatePage/>}/>
                        <Route path={routes.editCategory} element={<CategoryEditPage/>}/>
                    </Route>
                </Route>
                ) : (
                  <Route path="admin" element={<LoginPage />} />
                )}
            </Routes>
        </>
    );
}

export default App;
