import utils from './utils.jsx';
const EMPTY = "";


class validation {
    userValidation(user) {
        let error = EMPTY;

        if (utils.isNullorEmpty(user.username)) { error = 'Username '; }
        if (utils.isNullorEmpty(user.nameuser)) { error = 'Name'; }
        if (utils.isNullorEmpty(user.surname)) { error = 'Surname '; }
        if (utils.isNullorEmpty(user.passport)) { error = 'Passport '; }
        if (utils.isNullorEmpty(user.email)) { error = 'Email '; }
        if (utils.isNullorEmpty(user.address)) { error = 'Address '; }
        if (utils.isNullorEmpty(user.telephone)) { error = 'Telephone '; }
        if (utils.isNullorEmpty(user.passport)) { error = 'Passport '; }

        if (!utils.isNullorEmpty(error)) {
            return error + ' must be filled.';
        }
    }
}

export default validation;