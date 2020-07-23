import React from 'react';

import './ChooseFlightItem.scss';

const ChooseFlightItem = ({ flight }) => {
    return( <div>
                <label>Salida</label>
                    <p>{flight.takeOffDate}</p>
                    <p>{flight.takeOffAirport}</p>
                    <p>{flight.landingAirport}</p>

                    <label>Llegada</label>
                    <p>{flight.landingDate}</p>

                    <label>Aerolínea</label>
                    <p >{flight.company}</p>

                    <label>Vuelo</label>
                    <p >{flight.plane}</p>

                    <label>Precio</label>
                    <p>{flight.price}</p>

                    <button>Comprar</button>
            </div>)
}
export default ChooseFlightItem;