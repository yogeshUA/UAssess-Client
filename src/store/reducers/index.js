import {combineReducers} from 'redux';
import assesmentReducers from './assesmentReducers';

export const reducers = combineReducers({
    assesment: assesmentReducers
     
});