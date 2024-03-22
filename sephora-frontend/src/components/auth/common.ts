import {store} from "../../store/store.ts";
import {AuthUserActionType, IGoogleUser, IUser} from "./types.ts";
import {jwtDecode} from "jwt-decode";
import http_common from "../../http_common.ts";

function GrabInfo() {
    const gToken = localStorage.gtoken,
        token = localStorage.token;

    if (!gToken && !token) return;

    if (gToken) {
        const user = jwtDecode(gToken) as IGoogleUser;
        if (!user || user.exp * 1000 < Date.now()) {
            localStorage.removeItem('gtoken');
            return;
        }

        if (!token)
            http_common.post("account/auth/google", gToken)
                .then(r => localStorage.token = r.data.token);


        store.dispatch({
            type: AuthUserActionType.LOGIN_GOOGLE_USER,
            payload: {
                id: user?.sub,
                userName: user?.name,
                email: user?.email,
                profilePicture: user?.picture,
                roles: ['User'],
            },
        });
    } else if (token) {
        const user = jwtDecode(token) as IUser;
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
}

export {GrabInfo};
