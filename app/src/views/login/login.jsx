import React from 'react';

import userService from '../../services/userService.jsx';
import validation from '../../utils/validations';
import utils from '../../utils/utils';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            msgError: ""
        }
    }

    handleChange = (ev) => {
        this.setState({ [ev.target.name]: ev.target.type === 'string' ? +ev.target.value : ev.target.value });
    }

    pressLogin = (ev) => {
        ev.preventDefault();

        let credentials = {
            username: this.state.username,
            password: this.state.password
        };

        let error = validation.credentialsValidation(credentials);
        if (!utils.isNullOrEmpty(error)) { 
            this.setState({ msgError: error }); 
            return;
        }

        try {
            userService.login(credentials);
            setTimeout(() => {
                this.props.history.push('/');
            }, 2000);

        } catch (error) { return; }
    }

    render() {
        return (
            <form onSubmit={this.pressLogin}>
                <span>{this.state.msgError}</span>
                <input type="text" placeholder="usuario" name="username"
                    value={this.state.username} onChange={this.handleChange}></input>
                <input type="password" placeholder="password" name="password"
                    value={this.state.password} onChange={this.handleChange}></input>
                <button type="submit">LogIn!</button>
            </form>
        )
    }


}
export default Login;