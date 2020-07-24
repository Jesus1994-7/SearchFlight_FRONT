import axios from 'axios';

const EMPTY = [];

export const flightRepository = {
    getFlightsGo
};

async function getFlightsGo(dataFlights) {
    try {
        const res = await axios.post('data/searchFlight', dataFlights);
        return res.data;
    } catch (error) { return EMPTY; }
}
