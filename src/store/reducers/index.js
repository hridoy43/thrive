import { combineReducers } from 'redux';
import loggedReducer from './login';

const allReducers = combineReducers({
    isLogged: loggedReducer,
});

export default allReducers;
