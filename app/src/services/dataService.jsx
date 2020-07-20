import dataRepository from '../repositories/dataRepository.jsx';
import utils from '../utils/utils.jsx';

import { valuesQuestions, valuesIataCodes, valuesCountries, valuesCurrencies } from '../redux/actions.js';

class dataService {

    importInitialData() {

        let questions = dataRepository.getAllQuestions();
        questions = questions.concat(utils.systemSecretQuestions());
        questions = [...new Set(questions.map(item => item.questionSecret))];
        valuesQuestions(questions);

        let iataCodes = dataRepository.getAllIataCodes();
        valuesIataCodes(iataCodes);

        let countries = dataRepository.getAllCountries();
        valuesCountries(countries);

        let currencies = dataRepository.getAllCurrencies();
        valuesCurrencies(currencies);
    }
}
export default dataService;