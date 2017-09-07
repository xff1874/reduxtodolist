import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore } from "redux";
import './index.css';
import reducers from "./reducers/index"
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(reducers)

const fApp = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(fApp, document.getElementById('root'));
registerServiceWorker();