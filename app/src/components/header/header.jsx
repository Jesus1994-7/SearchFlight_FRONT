import React from 'react';
import { NavLink } from 'react-router-dom'

import './header.css';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn : false
        }
    };

    render() {
        return(
            <div className="comp-Header">
                <NavLink exact to="/">
                    <img src="" alt=""/>
                </NavLink>
                <NavLink exact to="/login">
                    <button>Login</button> 
                </NavLink>
                <NavLink exact to="/register">
                    <button>Register</button> 
                </NavLink>
            </div>
        );
    };
};
export default Header;