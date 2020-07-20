import { login } from '../redux/actions.js';
import userRepository from '../repositories/userRepository.jsx';

class userService {

    login(credentials) {
        const logged = userRepository.login(credentials);
        if(!logged){ throw Error("Could not log in.");}
        login(logged);
    }
}
export default userService;