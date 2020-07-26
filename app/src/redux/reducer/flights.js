import { FLIGHTS, GOTRAVEL } from "../types/flights.js";

const initialState = {
    flightsList: [],
    goFlight: [],
    
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case FLIGHTS:
            return {
                ...state,
                flightsList: action.payload
            };
        case GOTRAVEL:
            return {
                ...state,
                goFlight: action.payload
            };

        default:
            return state;
    }
}

