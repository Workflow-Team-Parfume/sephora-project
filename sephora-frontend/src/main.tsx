import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {persistor, store} from "./store/store";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {PersistGate} from "redux-persist/integration/react";
import "./i18n/i18n.ts";
import {ThemeProvider} from "@mui/material";
import theme from "./common/themeBreakpoints.ts";
import {GoogleOAuthProvider} from "@react-oauth/google";
import GrabInfo from "./components/auth/common.ts";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

GrabInfo().catch(e => console.error(e));

root.render(
    <ThemeProvider theme={theme}>
        <GoogleOAuthProvider clientId="797576004258-c9tuljbakbj0ec9u1roe4eeqtuesuous.apps.googleusercontent.com">
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <BrowserRouter>
                        <App/>
                    </BrowserRouter>
                </PersistGate>
            </Provider>
        </GoogleOAuthProvider>
    </ThemeProvider>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
