import React from 'react';
import { withRouter } from 'react-router-dom';

import AirportList from '../airportList/airportList.jsx';
import { flightService } from '../../services/flightService.js';

import { utils } from '../../utils/utils.js';
import './searchFlight.scss';

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

    searchFlights = (ev) => {
        ev.preventDefault();

        try {
            if (this.state.airports[0] === this.state.airports[1]) {
                this.setState({ msgError: " Los aeropuertos tienen que ser diferentes. " });
                return;
            }
            if (utils.isNullOrEmpty(this.state.airports[0]) || utils.isNullOrEmpty(this.state.airports[1])) {
                this.setState({ msgError: " Tiene que seleccionar aeropuertos. " });
                return;
            }
            //this.setState({ datego: "2020-07-17" });
            if (utils.isNullOrEmpty(this.state.datego)) {
                this.setState({ msgError: " Tiene que tener fecha de ida. " });
                return;
            }
            console.log(this.state.airports[0], this.state.airports[1])
            flightService.getFlights(this.state.airports[0], this.state.airports[1],
                this.state.datego, this.state.datereturn)
            setTimeout(() => {
                this.props.history.push('/search');
            }, 1500);

        } catch (error) {
            console.log(error);
        }
    }
    render() {
        return (
            <form onSubmit={this.searchFlights} className="search">
                <div className="components-search">
                    <span>{this.state.msgError}</span>
                    <div className="names">
                        <p> Salida</p>
                        <p> Vuelta</p>
                        <p> Fecha de salida </p>
                        <p> Fecha de vuelta </p>
                    </div>

                    <div className="components">
                        <AirportList id={0} setAirport={this.setAirport} readOnly />
                        <AirportList id={1} setAirport={this.setAirport} readOnly />
                        <input type="text" name="datego" value={this.state.datego} onChange={this.handleChange} />
                        <input type="text" name="datereturn" value={this.state.datereturn} onChange={this.handleChange} />
                    </div>
                    <div>
                        <button type="submit">Donde están mis vuelos!</button>
                    </div>
                </div>
            </form>
        )
    }
}
export default withRouter(SearchFlightComp);