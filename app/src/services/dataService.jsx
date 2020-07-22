import { dataRepository } from '../repositories/dataRepository.jsx';
import { utils } from "../utils/utils.jsx";
import { valuesQuestions, valuesIataCodes, valuesCountries, valuesCurrencies } from '../redux/actions.js';

export const dataService = {
    importInitialData,
    exchange
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

<<<<<<< HEAD
    let currencies = dataRepository.getAllCurrencies();
    valuesCurrencies(currencies);

    /*const token = localStorage.getItem('authToken')
    if(!user && token){
        let user = userRepository.getUserbyToken();
        loginbyToken(user);
    }*/
    
};
=======
    dataRepository.getAllCurrencies()
    .then(currencies =>valuesCurrencies(currencies))
};

function exchange(currencyA, currencyB, quantity) {

    const currencies = {
        baseCurrencyCode: currencyA,
        changeCurrencyCode: currencyB
    };

    let result = dataRepository.getExchangeRatio(currencies)
    .then(res => { return res.exchange * quantity;})
    .catch(error => { });
    return result;
}
>>>>>>> feature/exchange
