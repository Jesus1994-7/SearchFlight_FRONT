import { NavLink ,Link} from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';

import './header.scss';
//ICONOS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons'

import logo1 from '../../img/logo.png'

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {
        return (
            <header className="comp-Header">
                <div>
                    <NavLink exact to="/">
                        <img className="logo" src={logo1} alt="" />
                    </NavLink>
                </div>

                <div>
                    <ul className="list-icons">
                        <li><Link to="/contactUs"><FontAwesomeIcon icon={faEnvelope} className="iconos" /></Link></li>
                        <li><FontAwesomeIcon icon={faUser} className="iconos" />
                            <ul>
                                {this.props.userL?.id
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
                    </ul>
                </div>

            </header>
        );
    }
}
const mapStateToProps = ({ user }) => ({ userL: user?.user })
export default connect(mapStateToProps)(Header);