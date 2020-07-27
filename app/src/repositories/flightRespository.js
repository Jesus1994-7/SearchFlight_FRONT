import axios from 'axios';

const EMPTY = [];

export const flightRepository = {
    getFlightsGo,
    getFlightsbyDate,
    getFlightsbyLandingAirport
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

async function getFlightsbyLandingAirport(landingAirport) {
    try {
        const res = await axios.post(`data/flightbyLandAirport/`,landingAirport);
        return res.data;
    } catch (error) { return EMPTY; }
};
