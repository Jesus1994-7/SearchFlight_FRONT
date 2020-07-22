import { dataRepository } from '../repositories/dataRepository.jsx';
import { utils } from "../utils/utils.jsx";

import { valuesQuestions, valuesIataCodes, valuesCountries, valuesCurrencies } from '../redux/actions.js';

export const dataService = {
    importInitialData
};

function importInitialData() {

    let questions = dataRepository.getAllQuestions();
    let defaultQuestions = utils.systemSecretQuestions();
    questions = Array.prototype.push.apply(questions, defaultQuestions);

    //questions = [...new Set(questions.map(item => item.questionSecret))];
    valuesQuestions(questions);

    let iataCodes = dataRepository.getAllIataCodes();
    valuesIataCodes(iataCodes);

    let countries = dataRepository.getAllCountries();
    valuesCountries(countries);

    dataRepository.getAllCurrencies()
    .then(currencies =>valuesCurrencies(currencies))
};

function exchange(currencyA, currencyB, quantity) {

    const currencies = {
        baseCurrencyCode: currencyA,
        changeCurrencyCode: currencyB
    };

    const ratio = dataRepository.getExchangeRatio(currencies).exchange;
    return quantity * ratio;
}