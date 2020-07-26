import { NavLink ,Link} from 'react-router-dom';
import React from 'react';

import './header.scss';
//ICONOS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUser, faSearch } from '@fortawesome/free-solid-svg-icons'

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {}
        }
    }
    componentDidMount() {
        //llamar a user de redux 
        //let userR = 
        //this.setState({user:userR});
    }

    render() {
        return (
            <header className="comp-Header">
                <div>
                    <NavLink exact to="/">
                        <img src="" alt="" />
                    </NavLink>
                </div>

                <div>
                    <ul className="list-icons">
                        <Link to="/contactUs"><FontAwesomeIcon icon={faEnvelope} className="iconos"/></Link>
                        <li><FontAwesomeIcon icon={faUser} className="iconos" />
                            <ul>
                                {this.state.user?.id
                                    ?
                                    <li>
                                        <Link to="/profile" className="accesos">Profile</Link>
                                        <Link to="/logOut" className="accesos">Logout</Link>
                                    </li>
                                    :
                                    <li>
                                        <Link to="/login" className="accesos">Login</Link>
                                        <Link to="/register" className="accesos">Register</Link>
                                    </li>
                                }
                            </ul>

                        </li>
                        <li><Link to="/"><FontAwesomeIcon icon={faSearch} className="iconos" /></Link></li>
                    </ul>
                </div>

            </header>
        );
    }
}

export default Header;