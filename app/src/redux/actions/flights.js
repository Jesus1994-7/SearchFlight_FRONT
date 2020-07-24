import { FLIGHTS } from "../types/flights.js";

import store from '../store';

export const valuesFlights = async (flightsList) => {
    console.log("dentro action")
    store.dispatch({
        type: FLIGHTS,
        payload: flightsList
    });
};