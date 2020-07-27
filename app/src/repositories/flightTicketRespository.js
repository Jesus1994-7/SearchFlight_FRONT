import axios from 'axios';

export const flightTicketRepository = {
    createTicket
};
async function createTicket(flighticket) {
    try {
        const res = await axios.post(`/flighticket/create`, flighticket)
        return res.data;
    } catch (error) {
        console.log(error)
    }
};
