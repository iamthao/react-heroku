/**
 * Created by ThaoNguyen on 12/11/2017.
 */
import React from 'react';

//--- install redux -----------
import {Provider} from 'react-redux'
import {applyMiddleware, createStore} from 'redux'

// Logger with default options
import logger from 'redux-logger'

import rootReducer from '../reducers/reducer'

let store = createStore(rootReducer, applyMiddleware(logger));

//end redux --------------

import App from '../components/app'

const Layout = () => (
    <Provider store={store}>
        <App/>
    </Provider>
)

export default Layout