import axios from 'axios';

const EMPTY ='';

class userService {

    async login(credentials) {
        try {
            const res = await axios.post(`http://localhost:3005/main/login`, credentials);
            return res.data;
        }
        catch (error) {
            return EMPTY;
        }
    }
}
export default userService;