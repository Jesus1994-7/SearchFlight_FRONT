import { createStore } from 'redux';
import reducer from './reducer.js';

<<<<<<< HEAD
let store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
=======
const store =
    createStore(reducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__());
>>>>>>> feature/exchange

export default store;