import React from "react";
import {Route, Routes} from "react-router-dom";
import CategoryListPage from "./components/admin/category/CategoryListPage.tsx";
import CategoryCreatePage from "./components/admin/category/CategoryCreatePage.tsx";
import CategoryEditPage from "./components/admin/category/CategoryEditPage.tsx";
import AdminLayout from "./components/admin/container/AdminLayout";
import HomePage from "./components/home/HomePage";
import LoginPage from "./components/auth/login/LoginPage";
import RegisterPage from "./components/auth/register/RegisterPage";
import Loader from "./components/common/loader/Loader";
import DefaultLayout from "./components/admin/container/default/DefaultLayout";
import AdminDashboard from "./components/admin/dashboard/AdminDashboard"
import Details from "./components/home/products/detailsProduct/Details";
import routes from './common/routes';
import Order from "./components/home/order/Order";
import Thank from "./components/home/order/thank/Thank";
import YourOrder from "./components/home/order/yourOrder/YourOrder";
import DeliveryMain from "./components/home/delivery/main/deliveryMain";
import DeliveryFreeLuxuryHub from "./components/home/delivery/pages/deliveryFreeLuxuryHub";
import DeliveryPickup from "./components/home/delivery/pages/deliveryPickup";
import DeliveryNewPost from "./components/home/delivery/pages/deliveryNewPost";
import DeliveryUkrPoshta from "./components/home/delivery/pages/deliveryUkrPoshta";
import DeliveryMeestMail from "./components/home/delivery/pages/deliveryMeestMail";
import DeliveryByCourierInUkraine from "./components/home/delivery/pages/deliveryByCourierInUkraine";
import NotFound from "./components/home/404/NotFound.tsx";
import Profile from "./components/home/profile/Profile.tsx";
import FullSizedPage from "./components/home/productsPage/envelopes/FullSizedPage.tsx";
import CarePage from "./components/home/productsPage/envelopes/CarePage.tsx";
import NoveltiesPage from "./components/home/productsPage/envelopes/NoveltiesPage.tsx";
import BottledPage from "./components/home/productsPage/envelopes/BottledPage.tsx";
import CatalogPage from "./components/home/productsPage/envelopes/CatalogPage.tsx";
import AboutUs from "./components/home/aboutUs/AboutUs.tsx";
import i18n from "./i18n/i18n.ts";

function App() {
    // const { user, isAuth } = useSelector((store: any) => store.auth as IAuthUser);
    React.useEffect(() => {
        const selectedLanguage = localStorage.getItem('selectedLanguage');

        i18n.changeLanguage(selectedLanguage==null ? "uk" : selectedLanguage)
            .catch(e => console.error(e));

        localStorage.setItem('selectedLanguage', selectedLanguage==null?"uk":selectedLanguage);
    },[])
    React.useEffect(() => {
        console.log(localStorage.token);;


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
            <Loader/>
            <Routes>
                <Route path={routes.home} element={<DefaultLayout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={routes.login} element={<LoginPage/>}/>
                    <Route path={routes.register} element={<RegisterPage/>}/>
                    <Route path={routes.productDetails} element={<Details />}/>

                    <Route path={routes.products} element={<CatalogPage/>}/>
                    <Route path={routes.novelties} element={<NoveltiesPage/>}/>
                    <Route path={routes.care} element={<CarePage/>}/>
                    <Route path={routes.bottled} element={<BottledPage/>}/>
                    <Route path={routes.full_sized} element={<FullSizedPage/>}/>

                    <Route path={routes.order} element={<Order/>}/>
                    <Route path={routes.thank} element={<Thank/>}/>
                    <Route path={routes.detailsOrder} element={<YourOrder/>}/>

                    <Route path={routes.profile} element={<Profile/>}/>
                  
                    <Route path={routes.deliveryMain} element={<DeliveryMain />}/>

                    <Route path={routes.deliveryFreeLuxuryHub} element={<DeliveryFreeLuxuryHub />}/>
                    <Route path={routes.deliveryPickup} element={<DeliveryPickup />}/>
                    <Route path={routes.deliveryNewPost} element={<DeliveryNewPost />}/>
                    <Route path={routes.deliveryUkrPoshta} element={<DeliveryUkrPoshta />}/>
                    <Route path={routes.deliveryMeestMail} element={<DeliveryMeestMail />}/>
                    <Route path={routes.deliveryByCourierInUkraine} element={<DeliveryByCourierInUkraine />}/>
                    <Route path={routes.aboutUs} element={<AboutUs />}/>
                    
                    <Route path='*' element={<NotFound/>}/>
                </Route>

                {/* {user?.role === "admin" && isAuth ? ( */}
                <Route path={routes.admin} element={<AdminLayout/>}>
                    <Route index element={<AdminDashboard/>}/>
                    <Route path={routes.adminCategoriesList}>
                        <Route index element={<CategoryListPage/>}/>
                        <Route path={routes.createCategory} element={<CategoryCreatePage/>}/>
                        <Route path={routes.editCategory} element={<CategoryEditPage/>}/>
                    </Route>

                    <Route path='*' element={<NotFound/>}/>
                </Route>
                {/* ) : (
                  <Route path="admin" element={<LoginPage />} />
                )} */}
            </Routes>
        </>
    );
}

export default App;
