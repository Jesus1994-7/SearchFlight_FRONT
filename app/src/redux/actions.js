import axios from 'axios';
import store from './store';

export const login = async(credentials) => {
    try {
        const res = await axios.post(`http://localhost:3005/main/login`, credentials);
        store.dispatch({
            type: 'LOGIN',
            payload: res.data.user
        });
        localStorage.setItem('token_SECRETWORD', res.data.token);
        return res;
    } catch (error) {
        console.error(error);
    }
}
