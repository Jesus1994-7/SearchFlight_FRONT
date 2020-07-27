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
                        <label name="takeOffDate" >{flight.takeOffDate}</label>

                        <label name="landingDate">{flight.landingDate}</label>

                        <label name="company" className="company">{flight.CompanyId}</label>

                        <label name="plane" className="plane">{flight.PlaneId}</label>

                        <label name="price" className="price">{flight.price}</label>

                        
                        <Link to='/buyflight'><button className="compra" value={flight.id} onClick={ e => this.props.setFlight(e.target.value)}>Comprar</button></Link>
                        
                    </div>
                ))}
            </div>
        )
    }
}
const mapStateToProps = ({ flights }) => ({ flightsList: flights.flightsList })
export default connect(mapStateToProps)(ChooseFlightItem);