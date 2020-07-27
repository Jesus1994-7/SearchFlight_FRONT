import React from 'react';
import { withRouter } from 'react-router-dom';

import AirportList from '../airportList/airportList.jsx';

import './specialOffer.scss';
import { utils } from '../../utils/utils.js';
import { flightService } from '../../services/flightService.js';

class SpecialOffer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            airport : 0
        }
    }

    lastMinuteFlights = (ev) => {
        ev.preventDefault();
        let date = Date();
        flightService.getFlightsbyDate(date);
        this.props.history.push('/search');
    }
    flightByAirport = (ev) => {
        ev.preventDefault();
        flightService.getFlightsbyLandingAirport(this.state.airport);
        this.props.history.push('/search');
    }
    setAirport = (airport, id) => {
        if(utils.isNullOrEmpty(airport)){return}
        this.setState({airport:airport});
    }

    render() {
        return (
            <div>
                <form onSubmit={this.lastMinuteFlights}>
                    <button type="submit">Last Minute!!</button>
                </form>
                <form onSubmit={this.flightByAirport}>
                <AirportList id={0} setAirport={this.setAirport} readOnly />
                    <button type="submit">Quiero ir!</button>
                </form>
            </div>
        );
    }
}
export default withRouter(SpecialOffer);