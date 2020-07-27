import React from 'react';
import './detailFlight.scss';

class DetailFlight extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            landingDate: "", //flight
            takeOffDate: "", //flight
            landingAirport: "", //flight
            takeOffAirport: "", //flight
            basePrice: 0, //flight
            ratioExchange: 0, 
            baseCurrency: "",
            price: 0, 
            currency: "",
            User: [], //user
            smoking: false,
            insurance: [],
            flightCode: "",
            plane: [], //flight
            seat: ""
        }
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
export default DetailFlight;