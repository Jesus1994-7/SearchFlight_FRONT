import { flightTicketRepository } from '../repositories/flightTicketRespository.js';

export const flightService = {
    createFlightTicket
};

function createFlightTicket(flightTicketFrontt) {
    const flightTicket = {

    };

    flightTicketRepository.create(flightTicket)
        .then()
        .catch(error => console.log(error));
};