import { currencyRepository } from '../repositories/currencyRepository.js';

export const currencyService = {
    exchange
};

function exchange(currencyA, currencyB, quantity) {

    const currencies = {
        baseCurrencyCode: currencyA,
        changeCurrencyCode: currencyB
    };

    let result = currencyRepository.getExchangeRatio(currencies)
        .then(res => { return res.exchange * quantity; })
        .catch(error => { });
    return result;
}; 