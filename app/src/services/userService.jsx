import { login } from '../redux/actions.js';
import { userRepository } from '../repositories/userRepository.jsx';

export const userService = {
    loginServ,
    updateUser,
    createUser
};

function loginServ(credentials) {
    const logged = userRepository.login(credentials);
    if (!logged) { throw Error("Could not log in."); }
    login(logged);
};
function updateUser(user) {
    userRepository.updateUser(user);
};
function createUser(user) {
    userRepository.createUser(user);
};