import { login, logout } from '../redux/actions/user.js';
import { userRepository } from '../repositories/userRepository.js';

export const userService = {
    loginServ,
    logoutServ,
    updateUser,
    createUser
};

function loginServ(credentials) {
    userRepository.login(credentials)
        .then(res => {
            login(res)
            localStorage.setItem('authToken', res.token);
        })
        .catch(error => console.log(error))
};
function logoutServ() {
    localStorage.removeItem('authToken');
    logout();

};
function updateUser(user) {
    userRepository.updateUser(user);
};
function createUser(user) {
    userRepository.createUser(user);
};