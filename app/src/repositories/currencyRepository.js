import axios from 'axios';

export const currencyRepository = {
    getExchangeRatio
};

async function getExchangeRatio(currencies) {
    try {
        const res = await axios.post(`data/exchagerate`, currencies);
        return res.data;
    }
    catch (error) {
        throw Error(error);
    }
};