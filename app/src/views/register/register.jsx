import React from "react";

import { validations } from "../../utils/validations.jsx";
import { utils } from "../../utils/utils.jsx";
import { userService } from "../../services/userService.jsx";

import './register.css';

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
    }

    //FUNCIONES

    handleChange = (ev) => {
        this.setState({ [ev.target.name]: ev.target.type === 'number' ? +ev.target.value : ev.target.value });
        //this.setState({[ev.target.username]: ev.target.type === 'number' ? +ev.target.value : ev.target.value});
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
            CountryId: 213,

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

    //RENDERIZAR
    render() {
        return (
            <div className="comp-Register">
                <div>
                    <span>{this.state.msgError}</span>
                    <input placeholder="Write your address" type="text" name="address" value={this.state.address} onChange={this.handleChange}></input>
                    <input placeholder="Write your telephone" type="text" name="telephone" value={this.state.telephone} onChange={this.handleChange} ></input>
                    <input placeholder="Write your email" type="text" name="email" value={this.state.email} onChange={this.handleChange}></input>
                    <input placeholder="Write your name" type="text" name="name" value={this.state.name} onChange={this.handleChange}></input>
                    <input placeholder="Write your username" type="text" name="username" value={this.state.username} onChange={this.handleChange}></input>
                    <input placeholder="Write your surname" type="text" name="surname" value={this.state.surname} onChange={this.handleChange}></input>
                    <input placeholder="Write your password" type="password" name="password" value={this.state.password} onChange={this.handleChange}></input>
                    <input placeholder="Rewrite your password" type="password" name="password2" value={this.state.password2} onChange={this.handleChange}></input>
                    <input placeholder="Write your passport" type="text" name="passport" value={this.state.passport} onChange={this.handleChange}></input>
                    <input placeholder="Write your question" type="text" name="questionSecret" value={this.state.questionSecret} onChange={this.handleChange}></input>
                    <input placeholder="Write your answer" type="text" name="answerSecret" value={this.state.answerSecret} onChange={this.handleChange}></input>
                    <input placeholder="Choose your country" type="text" name="country" value={this.state.country} onChange={this.handleChange}></input>
                    <button onClick={this.createRegister}>REGISTER</button>
                </div>
            </div>
        );
    }
};

export default Register;