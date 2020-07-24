import axios from 'axios';

const EMPTY = [];

export const dataRepository = {
    getAllQuestions,
    getAllIataCodes,
    getAllCountries,
    getAllCurrencies,
    getAllAirports
};


async function getAllQuestions() {
    try {
        const res = await axios.get(`data/questions`);
        return res.data;
    }
    catch (error) { return EMPTY; }
};
async function getAllIataCodes() {
    try {
        const res = await axios.get(`data/iatacodes`);
        return res.data;
    }
    catch (error) { return EMPTY; }
};
async function getAllCountries() {
    try {
        const res = await axios.get(`data/countries`);
        return res.data;
    }
    catch (error) { return EMPTY; }
};
async function getAllCurrencies() {
    try {
        const res = await axios.get(`data/currencies`);
        return res.data;
    }
    catch (error) { return EMPTY; }
};
async function getAllAirports() {
    try {
        const res = await axios.get(`data/airports`);
        return res.data;
    }
    catch (error) { return EMPTY; }
};