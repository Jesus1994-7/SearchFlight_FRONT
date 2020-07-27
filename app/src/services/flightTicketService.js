import { flightTicketRepository } from '../repositories/flightTicketRespository.js';

export const flightServiceTicket = {
    createFlightTicket
};

function createFlightTicket(flightTicketFront) {

    flightTicketRepository.createTicket(flightTicketFront);

};