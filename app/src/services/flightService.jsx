import { flightRepository } from '../repositories/flightRespository.jsx';
import { valuesFlights } from '../redux/actions/flights.js'
import { utils } from '../utils/utils.jsx';

export const flightService = {
    getFlights
};

function getFlights(TakeOffAirportId, LandingAirportId, takeOffDate,dateReturn) {
    const dataFlights = {
        TakeOffAirportId: TakeOffAirportId,
        LandingAirportId: LandingAirportId,
        takeOffDate : takeOffDate
    };
    
    flightRepository.getFlightsGo(dataFlights)
        .then(flights => { valuesFlights(flights) })
        .catch(error => console.log(error));

    if (!utils.isNullOrEmpty(takeOffDate)) {
        //vuelta
    }
};