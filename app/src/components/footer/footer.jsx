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
                <div className="footer-contact">
                    <h4>Contact us</h4>
                    <p className="footer-text">900 901 529</p>

                </div>
                <div className="footer-customers">
                    <h4>For customers</h4>
                    <Link exact to="/aboutUs"> <p className="footer-text">About us</p></Link>
                    <Link to="/contactUs"> <p className="footer-text">Contact us</p> </Link>
                    <Link exact to="/privacy"><p className="footer-text">Privacy policy</p></Link>
                </div>
            </div>
        )
    }
}
export default Footer;