import React from 'react';
import { connect } from 'react-redux';

import './ChooseFlightItem.scss';
import { Link } from 'react-router-dom';

class ChooseFlightItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div >
                {this.props.flightsList?.map(flight => (
                    <div className="flights" key={flight.id} >
                        <div name="takeOffDate" >{flight.takeOffDate}</div>

                        <div name="takeOffAirportId" >{flight.TakeOffAirportId}</div>
                        <div name="landingAirportId" >{flight.LandingAirportId}</div>

                        <div name="landingDate">{flight.landingDate}</div>

                        <div name="company" >{flight.CompanyId}</div>

                        <div name="plane" >{flight.PlaneId}</div>

                        <div name="price" >{flight.price}</div>

                        
                            <Link to='/buyflight'><button value={flight.id} onClick={ e => this.props.setFlight(e.target.value)}>Comprar</button></Link>
                        
                    </div>
                ))}
            </div>
        )
    }
}
const mapStateToProps = ({ flights }) => ({ flightsList: flights.flightsList })
export default connect(mapStateToProps)(ChooseFlightItem);