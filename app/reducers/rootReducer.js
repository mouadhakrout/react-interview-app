import {combineReducers} from 'redux';
import {moviesReducer} from './stuffReducer';
const rootReducer = combineReducers({
    moviesReducer
});

export default rootReducer;