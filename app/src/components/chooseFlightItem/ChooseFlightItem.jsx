import React from 'react';
import { connect } from 'react-redux';

import './ChooseFlightItem.scss';

class ChooseFlightItem extends React.Component {

    state = {}


    render() {
        return (
            <div>
                {this.props.flightsList?.map(flight => (
                    <div>
                        <label>Salida</label>
                        <p>{flight.takeOffDate}</p>

                        <p>{flight.takeOffAirport}</p>
                        <p>{flight.landingAirport}</p>

                        <label>Llegada</label>
                        <p>{flight.landingDate}</p>

                        <label>Aerolínea</label>
                        <p>{flight.company}</p>

                        <label>Vuelo</label>
                        <p>{flight.plane}</p>

                        <label>Precio</label>
                        <p>{flight.price}</p>
                        
                    </div>
                ))}
            </div>
        )
    }
}
const mapStateToProps = ({ flights }) => ({ flightsList: flights.flightsList })
export default connect(mapStateToProps)(ChooseFlightItem);