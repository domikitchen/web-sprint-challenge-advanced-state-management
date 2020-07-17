import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import "./index.css";
import App from "./components/App";

import { reducer } from './reducers/index';

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
    <React.StrictMode>
        <Provider store = {store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root"));
