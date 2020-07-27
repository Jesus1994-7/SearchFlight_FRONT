import './404page.scss';

import React from 'react';
import { Redirect } from 'react-router-dom';

class ErrorPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            redirect: false
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ redirect: true });
        }, 3000);
    }
    render() {
        if (this.state.redirect) {
            return (
                <Redirect to={'/'} />
            )
        }
        return (
            <div align="center">
                <img src="https://media.giphy.com/media/CbNeTOSwGdpg4/giphy.gif" alt="Lost404"/>
                <h3>Quizas....te has equivocado?</h3>
                <h5>NO IMPORTA EN BREVE VOLVERAS AL INDEX ;)</h5>
            </div>
            
        );
    }
}
export default ErrorPage;