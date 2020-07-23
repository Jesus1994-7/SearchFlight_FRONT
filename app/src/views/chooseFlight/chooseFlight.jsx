import React from 'react';

import { connect } from 'react-redux';
import { dataService } from '../../services/dataService.jsx';

import { ChooseFlightItem } from '../../components/'

import './chooseFlight.scss';

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

        console.log(dataService.getChooseFlights(6, 2, "2020-07-17"));
        
    }

    handleChange = (ev) => {
        this.setState({ [ev.target.name]: ev.target.type === 'string' ? +ev.target.value : ev.target.value});
    }

    render() {
        return (
            <div >
                 {this.props.flights?.map(flight => <ChooseFlightItem key={flight.id} flight={flight} />)}
            </div>
        )
    }
}
const mapStateToProps = ({flightsList}) => ({flights: flightsList})
export default connect(mapStateToProps)(ChooseFlight);