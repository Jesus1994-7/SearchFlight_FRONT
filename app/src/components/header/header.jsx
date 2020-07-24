import React from 'react';
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';

import './header.scss';
//ICONOS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUser, faSearch } from '@fortawesome/free-solid-svg-icons'

const Header = () => {

    const user = useSelector(state => state.user);    
        return (
            <header className="comp-Header">
                <div>
                    <NavLink exact to="/">
                        <img src="" alt="" />
                    </NavLink> 
                </div>

                <div>
                    <ul className="list-icons">
                        <FontAwesomeIcon icon={faEnvelope} className="iconos" /> {/*CORREO*/}
                        <li><FontAwesomeIcon icon={faUser} className="iconos" />  {/*CORREO*/}
                            <ul>
                            {user?.id
                            ?
                                <li>
                                    <a href="/profile" className="accesos">Profile</a>
                                    <a href="/" className="accesos">Logout</a>
                                </li>
                            :
                                
                                <li>
                                    <a href="/login" className="accesos">Login</a>
                                    <a href="/register" className="accesos">Register</a>
                                </li>
                            }
                            </ul>

                        </li>
                        <li><a href="/search"><FontAwesomeIcon icon={faSearch} className="iconos" /></a></li>
                    </ul>
                </div>
                            
            </header>
        );
    }


export default Header;