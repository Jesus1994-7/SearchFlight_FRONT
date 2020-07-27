import './thankPage.scss';

import React from 'react';
import { Redirect } from 'react-router-dom';

class ThankPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            redirect: false
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ redirect: true });
        }, 2500);
    }
    render() {
        if (this.state.redirect) {
            return (
                <Redirect to={'/'} />
            )
        }
        return (
            <h3 align="center"> Gracias por su compra!</h3>
        );
    }
}
export default ThankPage;