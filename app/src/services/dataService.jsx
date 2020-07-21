import { dataRepository } from '../repositories/dataRepository.jsx';
import { utils } from "../utils/utils.jsx";
import { valuesQuestions, valuesIataCodes, valuesCountries, valuesCurrencies } from '../redux/actions.js';
import { userRepository } from '../repositories/userRepository.jsx';

export const dataService = {
    importInitialData
};

function importInitialData() {

    let questions = dataRepository.getAllQuestions();
    let defaultQuestions = utils.systemSecretQuestions();
    questions = Array.prototype.push.apply(questions,defaultQuestions);
    
    //questions = [...new Set(questions.map(item => item.questionSecret))];
    valuesQuestions(questions);

    let iataCodes = dataRepository.getAllIataCodes();
    valuesIataCodes(iataCodes);

    let countries = dataRepository.getAllCountries();
    valuesCountries(countries);

    let currencies = dataRepository.getAllCurrencies();
    valuesCurrencies(currencies);

    /*const token = localStorage.getItem('authToken')
    if(!user && token){
        let user = userRepository.getUserbyToken();
        loginbyToken(user);
    }*/
    
};