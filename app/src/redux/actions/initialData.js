import { AIRPORTS, QUESTIONS, IATACODES, COUNTRIES, CURRENCIES, INSURANCES } from "../types/initialData.js";
import store from '../store';

export const valuesAirports = async (airportsList) => {
    store.dispatch({
        type: AIRPORTS,
        payload: airportsList
    });
};
export const valuesQuestions = async (questionsList) => {
    store.dispatch({
        type: QUESTIONS,
        payload: questionsList
    });
};
export const valuesIataCodes = async (iataCodesList) => {
    store.dispatch({
        type: IATACODES,
        payload: iataCodesList
    });
};
export const valuesCountries = async (countriesList) => {
    store.dispatch({
        type: COUNTRIES,
        payload: countriesList
    });
};
export const valuesCurrencies = async (currenciesList) => {
    store.dispatch({
        type: CURRENCIES,
        payload: currenciesList
    });
};
export const valuesInsurances = async (insurancesList) => {
    store.dispatch({
        type: INSURANCES,
        payload: insurancesList
    });
};