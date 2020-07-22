import React from 'react';
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { userService } from '../../services/userService.jsx';
//import { utils } from '../../utils/utils.jsx';


import './header.css';

const Header = () => {

    const user = useSelector(state => state.user);
    console.table(user);

    return(
        <div className="comp-Header">
            <NavLink exact to="/">
                <img src="" alt=""/>
            </NavLink>
            {user.id
            ?
                <div> Bienvenido
                    <NavLink to='/profile' exact>{user.name}</NavLink>
                    <button  onClick={userService.logoutServ}>Logout</button>
                </div>
            :
                <div>
                    <NavLink exact to="/login">Login</NavLink>
                    <NavLink exact to="/register">Register</NavLink>
                </div>
            }
        </div>

    );
}
    

export default Header;