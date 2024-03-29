import { IAuthUser, AuthUserActionType, IUser } from "../../components/auth/types";
import {UnknownAction} from "@reduxjs/toolkit";

const initState: IAuthUser = {
  isAuth: false,
  isGoogle: false,
  user: undefined,
};

export const AuthReducer = (state = initState, action: UnknownAction): IAuthUser => {
  switch (action.type) {
    case AuthUserActionType.LOGIN_GOOGLE_USER: {
      const user = action.payload as IUser;
      return {
        isAuth: true,
        isGoogle: true,
        user,
      };
    }
    case AuthUserActionType.LOGIN_USER: {
      const user = action.payload as IUser;
      return {
        isAuth: true,
        isGoogle: false,
        user,
      };
    }
    case AuthUserActionType.LOGOUT_USER: {
      return {
        user: undefined,
        isGoogle: false,
        isAuth: false,
      };
    }
  }
  return state;
};
