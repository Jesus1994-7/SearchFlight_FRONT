import './specialOffer.scss';
import { flightService } from '../../services/flightService.js';

import React from 'react';

class specialOffer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    LastMinuteFlights(){
        flightService.getFlightsbyDate(Date());
    }

    render() {
        return (
            <form onSubmit={this.LastMinutFlights}>
                <button type="submit">Last Minute!!</button>
            </form>
        );
    }
}
export default specialOffer;