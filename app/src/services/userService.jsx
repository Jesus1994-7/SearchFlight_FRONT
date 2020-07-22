import { login } from '../redux/actions.js';
import { logout } from '../redux/actions.js';
import { userRepository } from '../repositories/userRepository.jsx';

export const userService = {
    loginServ,
    logoutServ,
    updateUser,
    createUser
};

function loginServ(credentials) {
    userRepository.login(credentials)
        .then(res => {login(res)
            localStorage.setItem('authToken', res.token);
        })
        .catch(error => console.log(error))
    //console.log(logged);
    //login(logged);
    
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