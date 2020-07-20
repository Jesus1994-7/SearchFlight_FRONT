import store from './store';
import userService from '../services/userService.jsx';

export const login = async(credentials) => {
    try {
        const res = userService.login(credentials);
        store.dispatch({
            type: 'LOGIN',
            payload: res.user
        });
        store.dispatch({
            type: 'TOKEN',
            payload: res.token
        });
        //localStorage.setItem('token_SECRETWORD', res.data.token);
        return res;
    } catch (error) {
        console.error(error);
    }
}
