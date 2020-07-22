import React from 'react';
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { userService } from '../../services/userService.jsx';
//import { utils } from '../../utils/utils.jsx';
import user from '../../redux/store.js'


import './header.scss';
//ICONOS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUser, faSearch } from '@fortawesome/free-solid-svg-icons'

const Header = () => {

    const user = useSelector(state => state.user);
    console.table(user);

    
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
                                    <a href="/login" className="accesos">Login</a>
                                    <a href="/register" className="accesos">Register</a>
                                </li>
                            :
                                <li>
                                    <a href="/profile" className="accesos">Profile</a>
                                    <a href="/" className="accesos">Logout</a>
                                </li>
                            }
                            </ul>

                        </li>
                        <li><FontAwesomeIcon icon={faSearch} className="iconos" /></li>
                    </ul>
                </div>
                            
            </header>
        );
    }


export default Header;