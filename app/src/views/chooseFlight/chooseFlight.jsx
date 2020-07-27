import React from 'react';
import ChooseFlightItem from '../../components/chooseFlightItem/ChooseFlightItem.jsx';

import './chooseFlight.scss';
import { flightService } from '../../services/flightService.js';
import { useSelector } from 'react-redux';

const ChooseFlight = (props) => {

    const flights = useSelector(({flights}) => flights.flightsList );
    //console.log(flights)


    
    function setFlight(idFlight) {
        for (const flight of flights) {
        console.log(typeof(flight.id))
        console.log(typeof( idFlight))
        if (parseInt(flight.id) == idFlight) {
            console.log(flight)
            flightService.choosedFlight(flight);
            break;
        }
        }
    }
   
        return (
            <div >
                <label>Salida</label>
                <label>Llegada</label>
                <label>Aerolínea</label>
                <label>Vuelo</label>
                <label>Precio</label>
                <ChooseFlightItem setFlight={setFlight}></ChooseFlightItem>

                <hr />
            </div>
        )
}

export default ChooseFlight;