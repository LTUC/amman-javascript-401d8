import {createStore, combineReducers} from 'redux';
import counter from './votes';
// enable an extension on ur browser for redux store checking.. 
import {composeWithDevTools} from 'redux-devtools-extension';

let reducers = combineReducers({votesCounter: counter});

// console.log("reducers >>> " ,reducers);
const store = () => {
    return createStore(reducers, composeWithDevTools())
}

export default store();