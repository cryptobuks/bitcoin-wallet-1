import React from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'mobx-react';
import AppStore from './store/store.js';

const appStore = new AppStore()

const Root = (
    <Provider AppStore={appStore}>
        <App />
    </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));
registerServiceWorker();

