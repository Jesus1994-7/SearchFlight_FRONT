import axios from 'axios';

const EMPTY = '';


export const userRepository = {
    login,
    logout,
    updateUser,
    createUser,
    //getUserbyToken
};

async function login(credentials) {
    try {
        const res = await axios.post(`http://localhost:3005/main/login`, credentials);
        return res.data;
        
    }
    catch (error) {
        throw Error("Could not log in.");
    }
};

async function logout() {
    try {
        const res = axios.get(`http://localhost:3005/user/logout`)
        return res;
    } catch (error) {
        
    }
}
function updateUser(user) {

    axios.post(`http://localhost:3005/user/modify`, user)
        .then()
        .catch(error => { throw Error(error) });
};
function createUser(user) {
    axios.post(`http://localhost:3005/main/register`, user)
        .then()
        .catch(error => { throw Error(error) });
};

/*function getUserbyToken() {
    axios.get(`http://localhost:3005/user/getInfo`)
        .then(res => {
            return res.data
        })
        .catch(error => {throw Error(error)})    
}*/