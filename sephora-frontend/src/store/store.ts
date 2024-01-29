import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {thunk} from "redux-thunk";
import { AuthReducer } from "./reducers/AuthReducer";
import { IsLoadingReducer } from "./reducers/IsLoadingReducer";
import {CartReducer} from "./reducers/CartReducer.ts";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, IsLoadingReducer);

export const store = configureStore({
  devTools: true,
  reducer: {
    auth: AuthReducer,
    loading: persistedReducer,
    cart: CartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk),
});

export const persistor = persistStore(store);

export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
