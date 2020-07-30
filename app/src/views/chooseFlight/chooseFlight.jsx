import React from 'react';
import ChooseFlightItem from '../../components/chooseFlightItem/ChooseFlightItem.jsx';
import Search from '../../components/searchFlight/searchFlight.jsx';


import './chooseFlight.scss';
import { flightService } from '../../services/flightService.js';
import { useSelector } from 'react-redux';

const ChooseFlight = () => {

    const flights = useSelector(({ flights }) => flights.flightsList);

    const setFlight = (idFlight) => {
        for (const flight of flights) {

            if (parseInt(flight.id) === parseInt(idFlight)) {
                flightService.choosedFlight(flight);
                break;
            }
        }
    }

    return (
        <div className="searchflight">
            <div className="header">
                <label>Salida</label>
                <label>Llegada</label>
                <label>Aerolínea</label>
                <label>Vuelo</label>
                <label>Precio</label>
            </div>
            <div className="flights">
                <ChooseFlightItem setFlight={setFlight}></ChooseFlightItem>
            </div>
                <Search />
        </div>
    )
}

export default ChooseFlight;