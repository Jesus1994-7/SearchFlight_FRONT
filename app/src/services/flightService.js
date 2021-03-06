import { flightRepository } from '../repositories/flightRespository.js';
import { valuesFlights, valuesFlight } from '../redux/actions/flights.js';
import { utils } from '../utils/utils.js';

export const flightService = {
    getFlights,
    choosedFlight,
    getFlightsbyDate,
    getFlightsbyLandingAirport
};

function getFlights(TakeOffAirportId, LandingAirportId, takeOffDate, dateReturn) {
    const dataFlights = {
        TakeOffAirportId: TakeOffAirportId,
        LandingAirportId: LandingAirportId,
        takeOffDate: takeOffDate
    };

    flightRepository.getFlightsGo(dataFlights)
        .then(flights => { valuesFlights(flights) })
        .catch(error => console.log(error));

    if (!utils.isNullOrEmpty(takeOffDate)) {
        //vuelta
    }
};
function choosedFlight(flight) {
    valuesFlight(flight);
};

function getFlightsbyDate(dateF) {
    
    const dateToFligth = {
        date: utils.DateToSQLFormat(dateF)
    };

    flightRepository.getFlightsbyDate(dateToFligth)
        .then(flights => { valuesFlights(flights) })
        .catch(error => console.log(error));
};

function getFlightsbyLandingAirport(id) {
    const airportLanding={
        id: id
    }
    flightRepository.getFlightsbyLandingAirport(airportLanding)
        .then(flights => { valuesFlights(flights) })
        .catch(error => console.log(error));
}
