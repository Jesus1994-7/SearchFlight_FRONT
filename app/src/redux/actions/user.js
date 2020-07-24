import { LOGIN, TOKEN, LOGOUT } from "../types/user.js";
import store from '../store';

export const login = async (loggedUser) => {
    try {
        store.dispatch({
            type: LOGIN,
            payload: loggedUser.user
        });
        store.dispatch({
            type: TOKEN,
            payload: loggedUser.token
        });

    } catch (error) {
        console.error(error);
    }
};
export const logout = async () => {

    store.dispatch({
        type: LOGOUT
    });
};