import React from 'react';
import { NavLink } from 'react-router-dom'
import user from '../../redux/store.js'

import './header.scss';
//ICONOS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUser,faSearch } from '@fortawesome/free-solid-svg-icons'

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false
        }
    };

    render() {
        if (user) {
            return (
                <header className="comp-Header">
                    <div><NavLink exact to="/">
                        <img src="" alt="" />
                    </NavLink>
                    </div>
                    <div>
                        <ul className="list-icons">
                        <FontAwesomeIcon icon={faEnvelope} className="iconos"/> {/*CORREO*/}
                            <li><FontAwesomeIcon  icon={faUser} className="iconos"/>  {/*CORREO*/}
                            <ul>
                                <li>
                                <a href="/login" className="accesos">Login</a>
                                <a href="/register" className="accesos">Register</a></li>
                            </ul>
                            </li>
                            <li><FontAwesomeIcon icon={faSearch} className="iconos"/></li>
                        </ul>
                    </div>



                </header>
            );
        }
    }
};

export default Header;