import { AIRPORTS, QUESTIONS, IATACODES, COUNTRIES, CURRENCIES } from "../types/initialData.js";

const initialState = {
    questionsList: [],
    iataCodesList: [],
    countriesList: [],
    currenciesList: [],
    airportsList: []
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case AIRPORTS:
            return {
                ...state,
                airportsList: action.payload
            };
        case QUESTIONS:
            return {
                ...state,
                questionsList: action.payload
            };
        case IATACODES:
            return {
                ...state,
                iataCodesList: action.payload
            };
        case COUNTRIES:
            return {
                ...state,
                countriesList: action.payload
            };
        case CURRENCIES:
            return {
                ...state,
                currenciesList: action.payload
            };
        default:
            return state;
    }
}