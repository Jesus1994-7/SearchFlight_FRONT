const initialState = {
    user: {},
    token: '',
    questionsList: [],
    iataCodesList: [],
    countriesList: [],
    currenciesList: []
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                user: action.payload
            }
        case 'TOKEN':
            return {
                ...state,
                token: action.payload
            }
        case 'QUESTIONS':
            return {
                ...state,
                questionsList: action.payload
            }
        case 'IATACODES':
            return {
                ...state,
                iataCodesList: action.payload
            }
        case 'COUNTRIES':
            return {
                ...state,
                countriesList: action.payload
            }
        case 'CURRENCIES':
            return {
                ...state,
                currenciesList: action.payload
            }
        default:
            return state
    }
}