import React from 'react';
import './airportList.scss';

import { connect } from 'react-redux';

class AirportList extends React.Component {

    state = {}

    render() {
        return (
            <select className="selector" defaultValue={this.props.selected} onChange={
                e => this.props.setAirport(
                    e.target.value, this.props.id
                )}>
                {this.props.airports?.map(airport => (
                    <option key={airport.id}
                        value={airport.id}
                    >
                        {airport.IataCode.code + " " + airport.name}
                    </option>
                ))}
            </select>
        )
    }
}

const mapStateToProps = ({ initialData }) => ({ airports: initialData.airportsList })
export default connect(mapStateToProps)(AirportList);