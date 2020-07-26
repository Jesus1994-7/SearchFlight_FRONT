import './logOut.scss';

import React from 'react';
import {Redirect }from 'react-router-dom';

import { userService } from '../../services/userService.js';

class LogOut extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            redirect: false
        }
    }
    componentDidMount() {
        userService.logoutServ();
        setTimeout(() => {
            this.setState({
                redirect: true,
            })
        }, 2500);
    }
    render() {
        if (this.state.redirect) {
            return (
                <Redirect to={'/'} />
            )
        }
        return (
            <h3 align="center">Gracias por usar nuesra aplicación, esperamos verle pronto.</h3>
        );
    }
}
export default LogOut;