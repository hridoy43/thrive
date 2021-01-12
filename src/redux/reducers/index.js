import { combineReducers } from 'redux';
import loggedReducer from './login';
import { userReducer, repoReducer } from './fetch';

const allReducers = combineReducers({
    isLogged: loggedReducer,
    user: userReducer,
    repo: repoReducer,
});

export default allReducers;
