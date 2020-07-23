import { dataRepository } from '../repositories/dataRepository.jsx';
import { utils } from "../utils/utils.jsx";
import { valuesQuestions, valuesIataCodes, valuesCountries, valuesCurrencies, chooseFlights } from '../redux/actions.js';

export const dataService = {
    importInitialData,
    exchange,
    getChooseFlights
};

function importInitialData() {

    dataRepository.getAllQuestions()
        .then(questions => {
           questions = questions.concat(utils.systemSecretQuestions());
            questions = [...new Set(questions.map(item => item.questionSecret))];
            questions = questions.reduce((gang,questionSecret)=>[...gang,{questionSecret}],[])
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
function getChooseFlights(TakeOffAirportId,LandingAirportId,takeOffDate) {
    const flights = {
        TakeOffAirportId : TakeOffAirportId,
        LandingAirportId : LandingAirportId,
        takeOffDate : takeOffDate
    };

    dataRepository.getAllChooseFlights(flights)
        .then(flights => {chooseFlights(flights)})
        .catch(error => console.log(error));
};
