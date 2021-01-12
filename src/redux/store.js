import { createStore, applyMiddleware } from 'redux';
import allReducers from 'redux/reducers';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BASE_URL } from 'config';

const client = axios.create({
    // all axios can be used, shown in axios documentation
    baseURL: BASE_URL,
    responseType: 'json',
});

export const store = createStore(allReducers, composeWithDevTools(applyMiddleware(axiosMiddleware(client))));

store.subscribe(() => {
    console.log(store.getState());
});
