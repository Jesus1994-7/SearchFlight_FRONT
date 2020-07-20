import axios from 'axios';

const EMPTY = '';

class userRepository {

    async login(credentials) {
        try {
            const res = await axios.post(`http://localhost:3005/main/login`, credentials);
            return res.data;
        }
        catch (error) {
            return EMPTY;
        }
    }
    updateUser(user) {

        axios.post(`http://localhost:3005/user/modify`, user)
            .then()
            .catch(error => { throw Error(error) });
    }
    createUser(user) {
        axios.post(`http://localhost:3005/main/register`, user)
            .then()
            .catch(error => { throw Error(error) });
    }
}

export default userRepository;