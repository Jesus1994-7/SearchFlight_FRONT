import { FLIGHTS, GOTRAVEL } from "../types/flights.js";

import store from '../store';

export const valuesFlights = async (flightsList) => {
    store.dispatch({
        type: FLIGHTS,
        payload: flightsList
    });
};
export const valuesFlight = async (goFlight) => {
    store.dispatch({
        type: GOTRAVEL,
        payload: goFlight
    });
};

