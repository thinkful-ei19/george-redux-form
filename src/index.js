import React from 'react';
import Store from './store';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import TrackingForm from './components/tracking-from';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={Store}>
        <TrackingForm />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
