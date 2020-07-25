import React from 'react';
import { NavLink } from 'react-router-dom';
import './footer.scss';

class Footer extends React.Component {
    constructor(props) {
        super(props);

        this.state = { }
    }

    render() {
        return (
            <div className="comp-footer">
                <div className="div-left">
                    <p>Contact us</p>
                    <button>900 901 529</button>

                </div>
                <div className="div-right">
                    <p>For customers</p>
                    <NavLink exact to="/aboutus">
                        <button>About us</button>
                    </NavLink>
                    <NavLink exact to="/contactus">
                        <button>Contact us</button>
                    </NavLink>
                    <NavLink exact to="/privacy">
                        <button>Privacy policy</button>
                    </NavLink>
                </div>
            </div>
        )
    }
}
export default Footer;