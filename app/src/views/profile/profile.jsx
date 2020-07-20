import React from 'react';
import axios from 'axios';

import validations from '../../utils/validations.jsx';
import utils from '../../utils/utils';

import './profile.css';
import userService from '../../services/userService.jsx';

class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            idUser: 0,
            nameuser: "",
            username: "",
            surname: "",
            passport: "",
            countryId: 0,
            contactInfoId: 0,
            address: "",
            telephone: "",
            email: "",
            msgError: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {

        //recuperar de storage.user
        axios.get(`http://localhost:3005/user/` + 2)
            .then(res => {
                const user = res.data;
                console.log(user);
                this.setState({
                    idUser: user.id,
                    username: user.username,
                    nameuser: user.name,
                    surname: user.surname,
                    passport: user.passport,
                    countryId: user.CountryId,
                    contactInfoId: user.ContactInfoId,
                    address: user.ContactInfo.address,
                    telephone: user.ContactInfo.telephone,
                    email: user.ContactInfo.email
                })
            })
            .catch(error => console.log(error));
    }

    handleChange = (ev) => {
        this.setState({ [ev.target.name]: ev.target.type === 'string' ? +ev.target.value : ev.target.value });
    }

    handleUpdate = (ev) => {

        let user = {
            id: this.state.idUser,
            username: this.state.username,
            name: this.state.nameuser,
            surname: this.state.surname,
            passport: this.state.passport,
            CountryId: this.state.countryId,
            ContactInfoId: this.state.contactInfoId,
            address: this.state.address,
            telephone: this.state.telephone,
            email: this.state.email
        };

        let error = validations.userValidation(user);

        if (!utils.isNullOrEmpty(error)) {
            this.setState({ msgError: error });
            return;
        }

        try {
            userService.updateUser(user);
            setTimeout(() => {
                this.props.history.push('/');
            }, 2000);
        } catch (error) {
            console.log(error);
            return;
        }
    }

    //falta la parte de typePayData
    //falta country
    render() {
        return (
            <div>
                <span>{this.state.msgError}</span>
                <br /><label>Username: </label>
                <input type="text" name="username" value={this.state.username}
                    onChange={this.handleChange}></input>
                <br /> <label>Name: </label>
                <input type="text" name="nameuser" value={this.state.nameuser}
                    onChange={this.handleChange}></input>
                <br /><label>Surname: </label>
                <input type="text" name="surname" value={this.state.surname}
                    onChange={this.handleChange}></input>
                <br /><label>Passport: </label>
                <input type="text" name="passport" value={this.state.passport}
                    onChange={this.handleChange}></input>
                <br /><label>Dirección: </label>
                <input type="text" name="address" value={this.state.address}
                    onChange={this.handleChange}></input>
                <br /><label>Telefono: </label>
                <input type="text" name="telephone" value={this.state.telephone}
                    onChange={this.handleChange}></input>
                <br /><label>Email: </label>
                <input type="text" name="email" value={this.state.email}
                    onChange={this.handleChange}></input>
                <br /><label>Pais: </label>

                <button onClick={this.handleUpdate}>Update!</button>
            </div>
        )
    }
}
export default Profile;