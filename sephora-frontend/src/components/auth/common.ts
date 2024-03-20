import {store} from "../../store/store.ts";
import {AuthUserActionType, IGoogleUser, IUser} from "./types.ts";
import {jwtDecode} from "jwt-decode";

function GrabInfo() {
    const gToken = localStorage.gtoken,
        token = localStorage.token;

    if (!gToken && !token) return;

    if (gToken) {
        const user = jwtDecode(gToken) as IGoogleUser;
        console.log(user)
        if (!user || user.exp * 1000 < Date.now()) {
            localStorage.removeItem('gtoken');
            return;
        }

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
