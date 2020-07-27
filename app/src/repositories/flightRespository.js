import axios from 'axios';

const EMPTY = [];

export const flightRepository = {
    getFlightsGo,
    getFlightsbyDate
};

async function getFlightsGo(dataFlights) {
    try {
        const res = await axios.post(`data/searchFlight`, dataFlights);
        return res.data;
    } catch (error) { return EMPTY; }
};

async function getFlightsbyDate(date) {
    try {
        const res = await axios.post(`data/flightbydate`, date);
        return res.data;
    } catch (error) { return EMPTY; }
};
