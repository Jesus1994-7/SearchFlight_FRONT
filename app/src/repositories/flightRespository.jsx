import axios from 'axios';

export const flightRepository = {
    getFlights
};
async function getFlights(dataFlights) {
    try {
        const res = await axios.post(`data/searchFlight`, dataFlights);
        return res.data;
    } catch (error) {
        throw Error(error);
    }
}
