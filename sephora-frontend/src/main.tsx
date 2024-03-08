import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store, persistor } from './store/store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from "redux-persist/integration/react";
import './i18n/i18n.ts'
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { IUser, AuthUserActionType } from './components/auth/types.ts';
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

  if (localStorage.token) {
    const token = localStorage.token;
    var user = jwtDecode(token) as IUser;
    store.dispatch({
      type: AuthUserActionType.LOGIN_USER,
      payload: {
        id: user.id,
        userName: user.userName,
        email: user.email,
        profilePicture: user.profilePicture,
        registrationDate: user.registrationDate,
        phoneNumber: user.phoneNumber,
        roles: user.roles,
      },
    });
  }

  if (localStorage.access_token) {
    const access_token = localStorage.access_token;
    axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${access_token}`,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
            Accept: "application/json",
          },
        }
      )
      .then((res) => {
        if (res.data) {
          store.dispatch({
            type: AuthUserActionType.LOGIN_GOOGLE_USER,
            payload: {
              id: res.data.id,
              userName: res.data.name,
              email: res.data.email,
              profilePicture: res.data.picture,
              registrationDate: "",
              phoneNumber: "",
              roles: ["user"],
            },
          });
        }
      })
      .catch((err) => console.log(err));
  }

root.render(
  <GoogleOAuthProvider clientId="797576004258-c9tuljbakbj0ec9u1roe4eeqtuesuous.apps.googleusercontent.com">
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  //</GoogleOAuthProvider>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
