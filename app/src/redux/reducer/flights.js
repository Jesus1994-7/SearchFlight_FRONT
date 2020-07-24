import { FLIGHTS } from "../types/flights.js";

const initialState = {
    flightList: []
};


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case FLIGHTS:
            return {
                ...state,
                flightsList: action.payload
            }
        default:
            return state;
    }
}