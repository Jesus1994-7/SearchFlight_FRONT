import { utils } from "./utils.jsx";

const EMPTY = "";
const MIN_PASSWORD_CHAR = 6;
const MAX_PASSWORD_CHAR = 12;

export const validations = {
    userValidation,
    registerUserValidation,
    credentialsValidation
}

function userValidation(user) {
    let error = EMPTY;

    if (utils.isNullOrEmpty(user.username)) { error += 'Username '; }
    if (utils.isNullOrEmpty(user.name)) { error += 'Name'; }
    if (utils.isNullOrEmpty(user.surname)) { error += 'Surname '; }
    if (utils.isNullOrEmpty(user.passport)) { error += 'Passport '; }
    if (utils.isNullOrEmpty(user.email)) { error += 'Email '; }
    if (utils.isNullOrEmpty(user.address)) { error += 'Address '; }
    if (utils.isNullOrEmpty(user.telephone)) { error += 'Telephone '; }
    if (utils.isNullOrEmpty(user.passport)) { error += 'Passport '; }

    if (!utils.isNullOrEmpty(error)) {
        error += ' must be filled.';
    }
    return error;
};

function registerUserValidation(user, password2) {

    let error = EMPTY;

    if (user.password.length < MIN_PASSWORD_CHAR || user.password.length > MAX_PASSWORD_CHAR) {
        error += 'Password must be between ' + MIN_PASSWORD_CHAR + ' and ' + MAX_PASSWORD_CHAR + ' characters';
    }
    if (user.password !== password2) {
        error += ' Passwords must be equals. ';
    }
    if (user.questionSecret === EMPTY) {
        error += ' You need a Secret Question to recover password. ';
    }
    if (user.answerSecret === EMPTY) {
        error += ' You need a Secret Answer to recover password. ';
    }

    if (!utils.isNullOrEmpty(error)) {
        error += ' must be filled.';
    }
    return error;
};
function credentialsValidation(credentials) {
    if (utils.isNullOrEmpty(credentials.password) || utils.isNullOrEmpty(credentials.username)) {
        return "All the fields must be filled.";
    }
    return EMPTY;
}