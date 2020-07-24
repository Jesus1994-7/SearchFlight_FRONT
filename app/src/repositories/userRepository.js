import axios from 'axios';

export const userRepository = {
    login,
    updateUser,
    createUser,
    //getUserbyToken
};

async function login(credentials) {
    try {
        const res = await axios.post('main/login', credentials);
        return res.data;
        
    }
    catch (error) {
        throw Error("Could not log in.");
    }
};

function updateUser(user) {

    axios.post(`user/modify`, user)
        .then()
        .catch(error => { throw Error(error) });
};
function createUser(user) {
    axios.post(`main/register`, user)
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