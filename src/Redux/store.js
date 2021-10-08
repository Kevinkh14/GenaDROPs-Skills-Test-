import {createStore, combineReducers, applyMiddleware} from 'redux';
import promise from 'redux-promise-middleware';
import pngReducer from './Reducers/pngReducer'
import nftReducer from './Reducers/nftReducer'

const rootReducer = combineReducers({
    pngReducer,
    nftReducer
});

export default createStore(rootReducer, applyMiddleware(promise))