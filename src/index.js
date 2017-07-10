import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ReduxStudents from './containers/ReduxStudents'

import { createStore } from 'redux';

import { Provider } from 'react-redux';

import reducers from './reducers/rootReducer'

const theStore = createStore(reducers);

ReactDOM.render(
    <Provider store={theStore}>
        <ReduxStudents />
    </Provider>
    , document.getElementById('root')
);
// registerServiceWorker();
