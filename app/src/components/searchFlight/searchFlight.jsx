import React from 'react';
import './searchFlight.css'; 
import AirportList from '../airportList/airportList.jsx';
import { dataService } from '../../services/dataService.jsx';

class SearchFlightComp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dateLanding: "",
            dateTakeoff: "",
            airports: [" ", " "],
            msgError: ""
        }
    }

    setAirport = (airport, id) => {
        this.state.airports.splice(id, 1, airport);
    }

    handleChange = (ev) => {
        this.setState({ [ev.target.name]: ev.target.type === 'string' ? +ev.target.value : ev.target.value });
    }

    calculate = (ev) => {
        ev.preventDefault();

        try {
            if (this.state.airports[0] === this.state.airports[1]) { this.setState({ msgError: " " }) }
            else {/*
                dataService.exchange(this.state.airports[0], this.state.airports[1],
                                     this.state.dateLanding, this.state.dateTakeoff)
                    .then(result => this.setState({  }));*/
            }
        } catch (error) {
            console.log(error);
        }
    }
    render() {
        return (
                <form onSubmit={this.calculate}>
                    Aeropuerto Salida <AirportList id={0} setAirport={this.setAirport} readOnly />
                    Aeropuerto Vuelta: <AirportList id={1} setAirport={this.setAirport} readOnly />
                    <br />
                    Fecha de salida:
                    Fecha de vuelta :
                    <button type="submit">Donde están mis vuelos!</button>

                </form>
        )
    }
}
export default SearchFlightComp;