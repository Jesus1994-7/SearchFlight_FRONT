import React from 'react';
import { useSelector } from 'react-redux'
import { connect } from 'react-redux';
import { flightService } from '../../services/flightService.js';

import  ChooseFlightItem  from '../../components/chooseFlightItem/ChooseFlightItem.jsx';

import './chooseFlight.scss';
import axios from 'axios';
import { utils } from '../../utils/utils.js';

class ChooseFlight extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            idFlight: 0,
            takeOffDate: "",
            landingAirport:"",
            takeOffAirport: "",
            landingDate: "",
            company: 0,
            plane: 0,
            price: 0
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){

        //flightService.getFlights();
        
    }

    handleChange = (ev) => {
        this.setState({ [ev.target.name]: ev.target.type === 'string' ? +ev.target.value : ev.target.value});
    }

    buyFlight = (ev) => {
        ev.preventDefault();
        const user = useSelector(state => state.user);
        if(utils.isNullOrEmpty(user.id)){
            this.props.history.push('/login');
        }else {
                axios.post('flighticket/create');
                //flightService.getFlightTicket
        }
    }

    render() {
        return (
            <div >
                 <ChooseFlightItem></ChooseFlightItem>
                 <button onClick={this.buyFlight}>Comprar</button>
                 <hr/>
            </div>
        )
    }
}
export default ChooseFlight;