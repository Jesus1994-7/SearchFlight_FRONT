import { dataRepository } from '../repositories/dataRepository.jsx';
import { utils } from "../utils/utils.jsx";
import {
    valuesQuestions, valuesIataCodes,
    valuesCountries, valuesCurrencies,
    valuesAirports
} from '../redux/actions/initialData.js';

export const dataService = {
    importInitialData,
};

function importInitialData() {

    dataRepository.getAllQuestions()
        .then(questions => {
            questions = questions.concat(utils.systemSecretQuestions());
            questions = [...new Set(questions.map(item => item.questionSecret))];
            questions = questions.reduce((gang, questionSecret) => [...gang, { questionSecret }], [])
            valuesQuestions(questions);
        });

    dataRepository.getAllAirports()
        .then(airports => valuesAirports(airports));

    dataRepository.getAllIataCodes()
        .then(iataCodes => valuesIataCodes(iataCodes));

    dataRepository.getAllCountries()
        .then(countries => valuesCountries(countries));

    dataRepository.getAllCurrencies()
        .then(currencies => valuesCurrencies(currencies));
};
