import { flightRepository } from '../repositories/flightRespository.js';
import { valuesFlights, valuesFlight } from '../redux/actions/flights.js';
import { utils } from '../utils/utils.js';

export const flightService = {
    getFlights,
    choosedFlight,
    getFlightsbyDate
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

    let date = utils.DateToSQLFormat(dateF);
    
    flightRepository.getFlightsbyDate(date)
        .then(flights => { valuesFlights(flights) })
        .catch(error => console.log(error));
}
