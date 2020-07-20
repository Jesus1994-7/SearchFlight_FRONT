import React from 'react';
import { NavLink } from 'react-router-dom'
import  user  from '../../redux/store.js'

import './header.css';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn : false
        }
    };

    render() {
        if(user ){
            return(
                <div className="comp-Header">
                    <NavLink exact to="/">
                        <img src="" alt=""/>
                    </NavLink>
                    <NavLink exact to="/login">
                        <button>LOGIN</button> 
                    </NavLink>
                    <NavLink exact to="/register">
                        <button>REGISTER</button> 
                    </NavLink>
                </div>
            );
        }
        }
    };

export default Header;