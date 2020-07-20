import store from './store';

export const login = async (loggedUser) => {
    try {
        store.dispatch({
            type: 'LOGIN',
            payload: loggedUser.user
        });
        store.dispatch({
            type: 'TOKEN',
            payload: loggedUser.token
        });
        //localStorage.setItem('token_SECRETWORD', res.data.token);
    } catch (error) {
        console.error(error);
    }
}

export const valuesQuestions = async (questionsList) => {
    store.dispatch({
        type: 'QUESTIONS',
        payload: questionsList
    });
}
export const valuesIataCodes = async (iataCodesList) => {
    store.dispatch({
        type: 'IATACODES',
        payload: iataCodesList
    });
}
export const valuesCountries = async (countriesList) => {
    store.dispatch({
        type: 'COUNTRIES',
        payload: countriesList
    });
}
export const valuesCurrencies = async (currenciesList) => {
    store.dispatch({
        type: 'CURRENCIES',
        payload: currenciesList
    });
}
