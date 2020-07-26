import axios from 'axios';

export const flighticketRepository = {
    createflightTicket
};
function createflightTicket(flighticket) {
    axios.post(`/flighticket/create`, flighticket)
        .then()
        .catch(error => { throw Error(error) });
};
