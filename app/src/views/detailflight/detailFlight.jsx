import React from 'react'
import './detailFlight.scss';

import { flightServiceTicket } from '../../services/flightTicketService.js';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useHistory} from 'react-router-dom';


const DetailFlight = () => {

    const flight = useSelector(({ flights }) => flights.goFlight)
    
    const history = useHistory();

    const buyFlight = (ev) => {
        ev.preventDefault();
        try {
            const flightTicket = {
                ...flight,
                ratioExchange: 1,
                InsuranceId: 1,
                seat: 3
            }
            console.log(flightTicket);
            flightServiceTicket.createFlightTicket(flightTicket)
            console.log('entra')
            setTimeout(() => {
                history.push('/thanks')
            }, 1500)
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="billview">
            <div key={flight.id} className="bill">
               <div className="billInfo" value={flight.takeOffDate} name="takeOffDate"> Fecha de salida : {flight.takeOffDate}</div>

                <div className="billInfo" value={flight.takeOffAirport} name="takeOffAirportId">Aeropuerto de salida : {flight.TakeOffAirportId}</div>
                <div className="billInfo" value={flight.LandingAirportId} name="landingAirportId">Aeropuerto de llegada : {flight.LandingAirportId}</div>

                <div className="billInfo" value={flight.landingDate} name="landingDate">Fecha de llegada : {flight.landingDate}</div>

                <div className="billInfo" value={flight.CompanyId} name="company">Compañía : {flight.Company.name}</div>

                <div className="billInfo" value={flight.PlaneId} name="plane">Avión : {flight.Plane.model}</div>

                <div className="billInfo" value={flight.price} name="price">Precio : {flight.price}</div>

                <NavLink exact to='/'>
                    <button onClick={buyFlight}>Comprar</button>
                </NavLink>
            </div>
        </div>
    );

}

export default DetailFlight;