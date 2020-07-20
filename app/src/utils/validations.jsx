import utils from './utils.jsx';
const EMPTY = "";


class validation {
    userValidation(user) {
        let error = EMPTY;

        if (utils.isNullOrEmpty(user.username)) { error = 'Username '; }
        if (utils.isNullOrEmpty(user.nameuser)) { error = 'Name'; }
        if (utils.isNullOrEmpty(user.surname)) { error = 'Surname '; }
        if (utils.isNullOrEmpty(user.passport)) { error = 'Passport '; }
        if (utils.isNullOrEmpty(user.email)) { error = 'Email '; }
        if (utils.isNullOrEmpty(user.address)) { error = 'Address '; }
        if (utils.isNullOrEmpty(user.telephone)) { error = 'Telephone '; }
        if (utils.isNullOrEmpty(user.passport)) { error = 'Passport '; }

        if (!utils.isNullOrEmpty(error)) {
            return error + ' must be filled.';
        }
    }

    credentialsValidation(credentials) {
        if (utils.isNullOrEmpty(credentials.password) || utils.isNullOrEmpty(credentials.username)) {
            return "All the fields must be filled.";
        }
        return EMPTY;
    }
};

export default validation;