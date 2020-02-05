import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {createStore, compose, applyMiddleware} from "redux";
import thunkMiddleware from 'redux-thunk';
import {Provider} from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

import cipherReducer from "./store/reducers/cipherMessageReducer";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(cipherReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));
const app = (
    <Provider store={store}>
        <App/>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();
