import React from 'react';
import { Link } from 'react-router-dom';
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
                    <h4>Contact us</h4>
                    <p>900 901 529</p>

                </div>
                <div className="div-right">
                    <h4>For customers</h4>
                    <p><Link exact to="/aboutUs"> About us</Link></p>
                    <p><Link to="/contactUs"> Contact us </Link></p>
                    <p><Link exact to="/privacy"> Privacy policy</Link></p>
                </div>
            </div>
        )
    }
}
export default Footer;