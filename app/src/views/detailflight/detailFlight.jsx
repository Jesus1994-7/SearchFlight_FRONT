import React from 'react'
import './detailFlight.scss';

import { flightServiceTicket } from '../../services/flightTicketService.js';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';


const DetailFlight = () =>{

    //Hacer ticket
    //CSS OFERTAS Y DE CAMBIO DIVISA
    //Meter Search en choose

    const flight = useSelector(({flights}) => flights.goFlight)
    console.log(flight);

    const buyFlight = (ev) => {
        ev.preventDefault();

        try {
            //validar solo los inputs
            //completamente iguales
            const flightTicket = {
                landingDate: this.state.landingDate,
                takeOffDate: this.state.takeOffDate,
                landingAirport: this.state.landingAirport,
                takeOffAirport: this.state.takeOffAirport,
                basePrice: this.state.basePrice,
                ratioExchange: 1,
                baseCurrency: this.state.baseCurrency,
                price: this.state.price,
                currency: this.state.currency,
                smoking: this.state.smoking,
                InsuranceId: 1,
                flightCode: this.state.flightCode,
                plane: this.state.plane,
                seat: 3
            }

            flightServiceTicket.createFlightTicket(flightTicket)
        } catch (error) {
            console.log(error);
        }
    }
        return (
            <div>
                {flight?.map(flight => {
                    return (
                        <div key={flight.id}>
                            <div name="takeOffDate">{flight.takeOffDate}</div>

                            <div name="takeOffAirportId">{flight.TakeOffAirportId}</div>
                            <div name="landingAirportId">{flight.LandingAirportId}</div>

                            <div name="landingDate">{flight.landingDate}</div>

                            <div name="company">{flight.CompanyId}</div>

                            <div name="plane">{flight.PlaneId}</div>

                            <div name="price">{flight.price}</div>

                            <NavLink exact to='/'>
                                <button onClick={buyFlight}></button>
                            </NavLink>
                        </div>
                    );
                })}
            </div>
        )
    }

export default DetailFlight;