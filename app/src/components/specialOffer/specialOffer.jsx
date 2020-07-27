import React from 'react';
import { withRouter } from 'react-router-dom';

import './specialOffer.scss';

import { flightService } from '../../services/flightService.js';

class SpecialOffer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    lastMinuteFlights = (ev) => {
        ev.preventDefault();

        let date = Date();
        flightService.getFlightsbyDate(date);
        this.props.history.push('/search');
    }

    render() {
        return (
            <form onSubmit={this.lastMinuteFlights}>
                <button type="submit">Last Minute!!</button>
            </form>
        );
    }
}
export default withRouter(SpecialOffer);