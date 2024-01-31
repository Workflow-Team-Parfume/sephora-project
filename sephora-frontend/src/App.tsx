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
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />

          {/* {user?.role === "admin" && isAuth ? ( */}
          <Route path={"/admin"} element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="category">
              <Route index element={<CategoryListPage />} />
              <Route path="create" element={<CategoryCreatePage />} />
              <Route path="edit">
                <Route path=":id" element={<CategoryEditPage />} />
              </Route>
            </Route>
          </Route>
          {/* ) : (
            <Route path="admin" element={<LoginPage />} />
          )} */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
