import { dataRepository } from '../repositories/dataRepository.jsx';
import { utils } from "../utils/utils.jsx";
import { valuesQuestions, valuesIataCodes, valuesCountries, valuesCurrencies } from '../redux/actions.js';

export const dataService = {
    importInitialData,
    exchange
};

function importInitialData() {

    dataRepository.getAllQuestions()
        .then(questions => {
            let defaultQuestions = utils.systemSecretQuestions();
            questions = Array.prototype.push.apply(questions, defaultQuestions);
            //delete repetidos
            //questions = [...new Set(questions.map(item => item.questionSecret))];
            valuesQuestions(questions);
        });


    dataRepository.getAllIataCodes()
        .then(iataCodes => valuesIataCodes(iataCodes));


    dataRepository.getAllCountries()
        .then(countries => valuesCountries(countries));

    dataRepository.getAllCurrencies()
        .then(currencies => valuesCurrencies(currencies));
};

function exchange(currencyA, currencyB, quantity) {

    const currencies = {
        baseCurrencyCode: currencyA,
        changeCurrencyCode: currencyB
    };

    let result = dataRepository.getExchangeRatio(currencies)
        .then(res => { return res.exchange * quantity; })
        .catch(error => { });
    return result;
}
