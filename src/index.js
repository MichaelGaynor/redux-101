import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';

import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';

import { Provider } from 'react-redux';

import reducers from './reducers/rootReducer';

// const theStore = createStore(reducers);
const createStoreWithMiddleWare = applyMiddleware(reduxPromise)(createStore);
const theFinalStore = createStoreWithMiddleWare(reducers);

ReactDOM.render(
    <Provider store={theFinalStore}>
        <div>
            <App/>
        </div>
    </Provider>
    , document.getElementById('root')
);
// registerServiceWorker();
