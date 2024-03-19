import {store} from "../../store/store.ts";
import {AuthUserActionType, IUser} from "./types.ts";
import {jwtDecode} from "jwt-decode";

export default async function GrabInfo() {
    const gToken = localStorage.access_token,
        token = localStorage.token;

    if (!gToken && !token) return;

    const user = jwtDecode(gToken ?? token) as IUser;
    const type = gToken
        ? AuthUserActionType.LOGIN_GOOGLE_USER
        : AuthUserActionType.LOGIN_USER;
    store.dispatch({
        type: type,
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
