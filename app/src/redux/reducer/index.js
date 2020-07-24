import { combineReducers } from 'redux';

import flightsReducer from './flights.js';
import usersReducer from './user.js';
import initialDataReducer from './initialData.js';

const reducer = combineReducers({
    users: usersReducer,
    flights: flightsReducer,
    initialData: initialDataReducer
});
export default reducer; 