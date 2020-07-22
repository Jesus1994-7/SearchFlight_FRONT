import React from 'react';
import axios from 'axios'

import { validations } from '../../utils/validations.jsx';
import { utils } from '../../utils/utils.jsx'

import './searchFlight.scss';
import { dataService } from '../../services/dataService.jsx';

class SearchFlight extends React.Component {
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
        axios.get(`http://localhost:3005/flight/search`)
            .then(res => {
                const flight = res.data;
                console.log(flight);
                this.setState({
                    idFlight: flight.id,
                    takeOffDate: flight.takeOffDate,
                    landingAirport: flight.LandingAirportId,
                    takeOffAirport: flight.TakeOffAirportId,
                    landingDate: flight.landingDate,
                    company: flight.CompanyId,
                    plane: flight.PlaneId,
                    price: flight.price
                })
            })
            .catch(error => console.log(error))
    }

    handleChange = (ev) => {
        this.setState({ [ev.target.name]: ev.target.type === 'string' ? +ev.target.value : ev.target.value});
    }

    render() {
        return (
            <div>
                <div>
                    <label>Salida</label>
                    <p onChange={this.handleChange}>{this.state.takeOffDate}</p>
                </div>
                <div>
                    <p onChange={this.handleChange}>{this.state.takeOffAirport}</p>
                    <p onChange={this.handleChange}>{this.state.landingAirport}</p>
                </div>
                <div>
                    <label>Llegada</label>
                    <p onChange={this.handleChange}>{this.state.landingDate}</p>
                </div>
                <div>
                    <label>Aerolínea</label>
                    <p  onChange={this.handleChange}>{this.state.company}</p>
                </div>
                <div>
                    <label>Vuelo</label>
                    <p  onChange={this.handleChange}>{this.state.plane}</p>
                </div>
                <div>
                    <label>Precio</label>
                    <p  onChange={this.handleChange}>{this.state.price}</p>
                </div>
                <div>
                    <button>Comprar</button>
                </div>
            </div>
        )
    }
}
export default SearchFlight; 