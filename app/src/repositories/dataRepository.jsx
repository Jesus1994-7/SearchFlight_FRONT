import axios from 'axios';

const EMPTY = [];

export const dataRepository = {
    getAllQuestions,
    getAllIataCodes,
    getAllCountries,
    getAllCurrencies,
    getExchangeRatio,
    getAllAirports
};


async function getAllQuestions() {
    try {
        const res = await axios.get(`http://localhost:3005/data/questions`);
        return res.data;
    }
    catch (error) { return EMPTY; }
};
async function getAllIataCodes() {
    try {
        const res = await axios.get(`http://localhost:3005/data/iatacodes`);
        return res.data;
    }
    catch (error) { return EMPTY; }
};
async function getAllCountries() {
    try {
        const res = await axios.get(`http://localhost:3005/data/countries`);
        return res.data;
    }
    catch (error) { return EMPTY; }
};
async function getAllCurrencies() {
    try {
        const res = await axios.get(`http://localhost:3005/data/currencies`);
        return res.data;
    }
    catch (error) { return EMPTY; }
};
async function getExchangeRatio(currencies) {
    try {
        const res = await axios.post(`http://localhost:3005/data/exchagerate`, currencies);
        return res.data;
    }
    catch (error) {
        throw Error(error);
    }
};
async function getAllAirports(currencies) {
    try {
        const res = await axios.get(`http://localhost:3005/data/airports`);
        return res.data;
    }
    catch (error) {
        throw Error(error);
    }
};


