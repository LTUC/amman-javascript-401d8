import {createStore, combineReducers} from 'redux';
import votes from './votes';
import candidates from './candidates';
// enable an extension on ur browser for redux store checking.. 
import {composeWithDevTools} from 'redux-devtools-extension';

let reducers = combineReducers({votes, candidates});

// console.log("reducers >>> " ,reducers);
const store = () => {
    return createStore(reducers, composeWithDevTools())
}

export default store();