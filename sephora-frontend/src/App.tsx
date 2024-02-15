import React from "react";
import {Route, Routes} from "react-router-dom";
import CategoryListPage from "./components/admin/category/list/CategoryListPage";
import CategoryCreatePage from "./components/admin/category/create/CategoryCreatePage";
import CategoryEditPage from "./components/admin/category/edit/CategoryEditPage";
import AdminLayout from "./components/admin/container/AdminLayout";
import HomePage from "./components/home/HomePage";
import LoginPage from "./components/auth/login/LoginPage";
import RegisterPage from "./components/auth/register/RegisterPage";
import Loader from "./components/common/loader/Loader";
// import { IAuthUser } from "./components/auth/types";
// import { useSelector } from "react-redux";
import DefaultLayout from "./components/admin/container/default/DefaultLayout";
import AdminDashboard from "./components/admin/dashboard/AdminDashboard"
import ProductsPage from "./components/home/productsPage/ProductsPage";
import Details from "./components/home/products/detailsProduct/Details";
import { DetailsProduct, Perfume, Filter, Filters } from "./components/home/data";
import routes from './common/routes';

function App() {
  // const { user, isAuth } = useSelector((store: any) => store.auth as IAuthUser);

  React.useEffect(() => {
    console.log(localStorage.token);

    // if (localStorage.token) {
    //   const token = localStorage.token;
    //   var user = jwtDecode(token) as IUser;
    //   store.dispatch({
    //     type: AuthUserActionType.LOGIN_USER,
    //     payload: {
    //       id: user.id,
    //       userName: user.userName,
    //       email: user.email,
    //       profilePicture: user.profilePicture,
    //       registrationDate: user.registrationDate,
    //       phoneNumber: user.phoneNumber,
    //       roles: user.roles,
    //     },
    //   });
    // }

    // if (localStorage.access_token) {
    //   const access_token = localStorage.access_token;
    //   axios
    //     .get(
    //       `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${access_token}`,
    //       {
    //         headers: {
    //           Authorization: `Bearer ${access_token}`,
    //           Accept: "application/json",
    //         },
    //       }
    //     )
    //     .then((res) => {
    //       if (res.data) {
    //         store.dispatch({
    //           type: AuthUserActionType.LOGIN_GOOGLE_USER,
    //           payload: {
    //             id: res.data.id,
    //             userName: res.data.name,
    //             email: res.data.email,
    //             profilePicture: res.data.picture,
    //             registrationDate: "",
    //             phoneNumber: "",
    //             roles: ["user"],
    //           },
    //         });
    //       }
    //     })
    //     .catch((err) => console.log(err));
    // }   
  }, [])

  return (
    <>
      <Loader />
      <Routes>
        <Route path={routes.home} element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path={routes.login} element={<LoginPage />} />
          <Route path={routes.register} element={<RegisterPage />} />
          <Route path={routes.productDetails} element={<Details product={DetailsProduct} />} />
          <Route path={routes.productsPage} element={<ProductsPage title="Новинки" products={Perfume} filters={Filters} mainFilter={Filter}/>} />
        </Route>

        {/* {user?.role === "admin" && isAuth ? ( */}
        <Route path={routes.admin} element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path={routes.adminCategoriesList}>
            <Route index element={<CategoryListPage />} />
            <Route path={routes.createCategory} element={<CategoryCreatePage />} />
            <Route path={routes.editCategory} element={<CategoryEditPage />} />
          </Route>
        </Route>
        {/* ) : (
          <Route path="admin" element={<LoginPage />} />
        )} */}
      </Routes>
    </>
  );
}

export default App;
