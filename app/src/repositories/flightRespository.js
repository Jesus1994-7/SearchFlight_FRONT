import axios from 'axios';

const EMPTY = [];

export const flightRepository = {
    getFlightsGo,
    getFlighticket
};

async function getFlightsGo(dataFlights) {
    try {
        const res = await axios.post('data/searchFlight', dataFlights);
        return res.data;
    } catch (error) { return EMPTY; }
}

async function getFlighticket(dataFlight) {
    try {
        const res = await axios.post('flighticket/create' , dataFlight);
        return res.data;
    } catch (error) {
        return error;
    }
}