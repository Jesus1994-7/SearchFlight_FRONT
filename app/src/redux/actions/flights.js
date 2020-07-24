import { FLIGHTS } from "../types/flights.js";

import store from '../store';

export const valuesFlights = async (flightsList) => {
    store.dispatch({
        type: FLIGHTS,
        payload: flightsList
    });
};