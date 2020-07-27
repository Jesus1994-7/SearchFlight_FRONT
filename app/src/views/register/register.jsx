import React from 'react';

import { validations } from '../../utils/validations.js';
import { utils } from '../../utils/utils.js';
import { userService } from '../../services/userService.js';

import QuestionList from '../../components/questionList/questionList.jsx';
import CountryList from '../../components/countryList/countryList.jsx'

import './register.scss';

class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            address: "",
            telephone: "",
            email: "",
            name: "",
            username: "",
            surname: "",
            password: "",
            password2: "",
            passport: "",
            questionSecret: "",
            answerSecret: "",
            CountryId: "",
            msgError: "",

            isRegistred: false
        }
        //bindeamos la funcion al estado
        this.createRegister = this.createRegister.bind(this);
        this.setQuestion = this.setQuestion.bind(this);
        this.setCountry = this.setCountry.bind(this);
    }

    handleChange = (ev) => {
        this.setState({ [ev.target.name]: ev.target.type === 'number' ? +ev.target.value : ev.target.value });
    }

    createRegister() {

        const user = {
            address: this.state.address,
            telephone: this.state.telephone,
            email: this.state.email,
            name: this.state.name,
            username: this.state.username,
            surname: this.state.surname,
            password: this.state.password,
            passport: this.state.passport,
            questionSecret: this.state.questionSecret,
            answerSecret: this.state.answerSecret,
            CountryId: this.state.CountryId,
        }

        let error = validations.userValidation(user);
        error += validations.registerUserValidation(user, this.state.password2);

        if (!utils.isNullOrEmpty(error)) {
            this.setState({ msgError: error });
            return;
        }

        try {
            userService.createUser(user);
            setTimeout(() => {
                this.props.history.push('/');
            }, 2000);
        } catch (error) {
            console.log(error);
        }
    }

    setQuestion(question) {
        this.setState({ question: question });
    }

    setCountry(countryId) {
        this.setState({ CountryId: countryId });
    }

    render() {
        return (
            <div className="comp-Register">
                <div className="register">
                    <h3>Register</h3>
                    <span>{this.state.msgError}</span>
                    <label>Nombre de usuario</label><br />
                    <input placeholder="Introduzca un username" type="text" name="username" value={this.state.username} onChange={this.handleChange} /><br />
                    <label>Nombre</label><br />
                    <input placeholder="Introduzca su nombre" type="text" name="name" value={this.state.name} onChange={this.handleChange} /><br />
                    <label>Apellido</label><br />
                    <input placeholder="Introduzca su apellido" type="text" name="surname" value={this.state.surname} onChange={this.handleChange} /><br />
                    <label>Direccion postal</label><br />
                    <input placeholder="Introduzca su direccion" type="text" name="address" value={this.state.address} onChange={this.handleChange} /><br />
                    <label>telefono</label><br />
                    <input placeholder="Introduzca su telefono" type="text" name="telephone" value={this.state.telephone} onChange={this.handleChange} /><br />
                    <label>Email</label><br />
                    <input placeholder="Introduzca su email" type="text" name="email" value={this.state.email} onChange={this.handleChange} /><br />
                    <label>Pasaporte</label><br />
                    <input placeholder="Introduzca su pasaporte" type="text" name="passport" value={this.state.passport} onChange={this.handleChange} /><br />
                    <label>Contraseña</label><br />
                    <input placeholder="Introduzca una contraseña" type="password" name="password" value={this.state.password} onChange={this.handleChange} /><br />
                    <label>Repita la contraseña</label><br />
                    <input placeholder="Reescriba su contraseña" type="password" name="password2" value={this.state.password2} onChange={this.handleChange} /><br />
                    <label>Pregunta secreta</label><br />
                    <QuestionList setQuestion={this.setQuestion} readOnly /><br />
                    <label>Respuesta a su pregunta secreta</label><br />
                    <input placeholder="Escriba una respuesta" type="text" name="answerSecret" value={this.state.answerSecret} onChange={this.handleChange} /><br />
                    <label>País</label><br />
                    <CountryList setCountry={this.setCountry} readOnly /><br />
                    <button onClick={this.createRegister}>Registrar</button>
                </div>
            </div>
        );
    }
};

export default Register;