import { utils } from "./utils.js";

const EMPTY = "";
const MIN_PASSWORD_CHAR = 6;
const MAX_PASSWORD_CHAR = 12;

export const validations = {
    userValidation,
    registerUserValidation,
    credentialsValidation,
    contactMsgValidation,
    passwordsValidation,
    forgotDataValidation
}

function userValidation(user) {
    let error = EMPTY;

    if (utils.isNullOrEmpty(user.username)) { error += 'Usuario '; }
    if (utils.isNullOrEmpty(user.name)) { error += 'Nombre '; }
    if (utils.isNullOrEmpty(user.surname)) { error += 'Apellido '; }
    if (utils.isNullOrEmpty(user.passport)) { error += 'Pasaporte '; }
    if (utils.isNullOrEmpty(user.email)) { error += 'Email '; }
    if (utils.isNullOrEmpty(user.address)) { error += 'Direccion '; }
    if (utils.isNullOrEmpty(user.telephone)) { error += 'Telefono '; }
    if (utils.isNullOrEmpty(user.passport)) { error += 'Pasaporte '; }

    if (!utils.isNullOrEmpty(error)) {
        error += ' han de ser introducidos.';
    }
    return error;
};

function registerUserValidation(user, password2) {

    let error = EMPTY;

    error += this.passwordsValidation(user.password, password2);

    //if (utils.isNullOrEmpty(user.questionSecret)) { error += ' Necesita elegir una pregunta secreta. '; }
    if (utils.isNullOrEmpty(user.answerSecret)) { error += ' Necesita introducir una respuesta secreta. '; }

    return error;
};
function credentialsValidation(credentials) {
    if (utils.isNullOrEmpty(credentials.password) || utils.isNullOrEmpty(credentials.username)) {
        return "Todos los campos tienen que ser rellenados.";
    }
    return EMPTY;
};
function contactMsgValidation(contactMsg) {
    let error = EMPTY;

    if (utils.isNullOrEmpty(contactMsg.message)) { error += 'Mensaje '; }
    if (utils.isNullOrEmpty(contactMsg.subject)) { error += 'Asunto '; }
    if (utils.isNullOrEmpty(contactMsg.email)) { error += 'Email '; }

    if (!utils.isNullOrEmpty(error)) { error += ' tiene que ser rellanados.'; }
    return error;
};
function passwordsValidation(password, password2) {

    let error = EMPTY;
    if (utils.isNullOrEmpty(password) || utils.isNullOrEmpty(password2)) {
        error += ' Introduzca contraseñas ';
    }
    if (password.length < MIN_PASSWORD_CHAR || password.length > MAX_PASSWORD_CHAR) {
        error += ' Las contraseñas tienenq que tener entre ' + MIN_PASSWORD_CHAR + ' y ' + MAX_PASSWORD_CHAR + ' caracteres ';
    }
    if (password !== password2) {
        error += ' Las contraseñas tienen que ser iguales. ';
    }
    return error;
};
function forgotDataValidation(forgotData, password2) {
    let error = EMPTY;

    error += this.passwordsValidation(forgotData.password, password2);
    if (utils.isNullOrEmpty(forgotData.username)) { error += ' Debe introducir Username. '; }
    if (utils.isNullOrEmpty(forgotData.answer)) { error += ' Debe introducir una respuesta. '; }

    return error;
}