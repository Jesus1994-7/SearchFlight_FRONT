import { flightRepository } from '../repositories/flightRespository.js';
import { valuesFlights } from '../redux/actions/flights.js';
import { valuesFlight } from '../redux/actions/flights.js';
import { utils } from '../utils/utils.js';

export const flightService = {
    getFlights,
    choosedFlight
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

    console.log(flight)
       
    valuesFlight(flight);
    //traer lista de vuelos de redux
    //compara esos vuelos que vienen con la id que tu tienes
    //guardar ese objeto en redux usando gotravel
       
}
