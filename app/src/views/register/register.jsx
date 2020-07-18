import React from "react";
import axios from 'axios';
import './register.css';

class Register extends React.Component {
    constructor(props){
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
            error: "",

            isRegistred : false
        }
        //bindeamos la funcion al estado
        this.createRegister = this.createRegister.bind(this);
    }

    //FUNCIONES

    handleChange = (ev) => {
        this.setState({[ev.target.name]: ev.target.type === 'number' ? +ev.target.value : ev.target.value});
        //this.setState({[ev.target.username]: ev.target.type === 'number' ? +ev.target.value : ev.target.value});
    }

    createRegister() {
        //Errores
        const EMPTY = ""


        if(this.state.name === EMPTY){
            this.setState({error: 'Name can not be empty'})
            return
        }
        if(this.state.surname === EMPTY){
            this.setState({error : 'Surname can not be empty'})
            return
        }
        if(this.state.password.length < 6){
            this.setState({error : 'Password can not be empty'})
            return
        }
        if(this.state.password !== this.state.password2){
            this.setState({error : 'Passwords must be equals'})
            return
        }
        if(this.state.passport === EMPTY) {
            this.setState({error : 'Passport can not be empty'})
            return
        }
        if(this.state.questionSecret === EMPTY){
            this.setState({error : 'You need a questionSecret to recover password'})
            return
        }
        if(this.state.answerSecret === EMPTY){
            this.setState({error : 'You need a answerSecret to recover password'})
            return
        }
        //if(this.state.country === EMPTY){
        //    this.setState({error : 'You must be choose a country'})
        //    return
        //}
        if(this.state.email === EMPTY) {
            this.setState({error : 'Email can not be empty'})
            return
        }
        if(this.state.address === EMPTY) {
            this.setState({error : 'Address can not be empty'})
            return
        }
        if(this.state.telephone === EMPTY) {
            this.setState({error : 'Telephone can not be empty'})
            return
        }
        if(this.state.passport === EMPTY) {
            this.setState({error : 'Passport can not be empty'})
            return
        }

        //Conexion axios-back
        const user = {
            address: this.state.address,
            telephone: this.state.telephone,
            email: this.state.email,
            name: this.state.name,
            username: this.state.username,
            surname:this.state.surname,
            password:this.state.password,
            passport: this.state.passport,
            questionSecret: this.state.questionSecret,
            answerSecret: this.state.answerSecret,
            CountryId: 213,

        }
        axios.post(`http://localhost:3005/main/register`,  user )
            .then( () => {
                setTimeout(() => {
                    this.props.history.push('/');
                }, 2000)
            })
            .catch(error => {
                console.log(error);
            })

        //respuesta back positiva

    }

    //RENDERIZAR
    render() {
            return (
                <div className="comp-Register">
                    <div>       
                        <input placeholder="Write your address" type="text" name="address" value={this.state.address} onChange={this.handleChange}></input>
                        <input placeholder="Write your telephone" type="text" name="telephone" value={this.state.telephone}onChange={this.handleChange} ></input>
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