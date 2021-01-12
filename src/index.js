import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { createStore, applyMiddleware } from 'redux';
import allReducers from 'redux/reducers';
import { Provider } from 'react-redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BASE_URL } from 'config';
import reportWebVitals from './reportWebVitals';
import App from './App';

const client = axios.create({
    // all axios can be used, shown in axios documentation
    baseURL: BASE_URL,
    responseType: 'json',
});

const store = createStore(allReducers, composeWithDevTools(applyMiddleware(axiosMiddleware(client))));

store.subscribe(() => {
    console.log(store.getState());
});

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
