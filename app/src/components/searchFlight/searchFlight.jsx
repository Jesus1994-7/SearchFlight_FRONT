import React from 'react';
import './searchFlight.css'; 
import AirportList from '../airportList/airportList.jsx';
import { flightService } from '../../services/flightService.jsx';

class SearchFlightComp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            datego: "",
            datereturn: "",
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
            if (this.state.airports[0] === this.state.airports[1]) {
                 this.setState({ msgError: " Los aeropuertos tienen que ser diferentes. " });
                 }
            else {
                flightService.getFlights(this.state.airports[0], this.state.airports[1],
                                     this.state.datego, this.state.datereturn)
                    .then(result =>{
                        setTimeout(() => {
                            //redirrecion a web de vuelos
                        }, 2500);
                    });
            }
        } catch (error) {
            console.log(error);
        }
    }
    render() {
        return (
                <form onSubmit={this.calculate}>
                    {msgError}
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