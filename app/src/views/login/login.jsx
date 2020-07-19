import React from 'react';
import axios from 'axios';

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

        if (this.state.password === "" || this.state.username === "") {
            this.setState({ msgError: "All the fields must be filled." });
            return;
        }

        let user = {
            username: this.state.username,
            password: this.state.password
        };

        axios.post(`http://localhost:3005/main/login`, user)
            .then(() => {
                    setTimeout(() => {
                        this.props.history.push('/');
                    }, 2000)
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <div>
                <span>{this.state.msgError}</span>
                <input type="text" placeholder="usuario" name="username"
                    value={this.state.username} onChange={this.handleChange}></input>
                <input type="password" placeholder="password" name="password"
                    value={this.state.password} onChange={this.handleChange}></input>
                <button onClick={this.pressLogin}>LogIn!</button>
            </div>
        )
    }


}
export default Login;