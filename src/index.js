import React from 'react';
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker';
import PageRouter from './router'

ReactDOM.render(<PageRouter />, document.getElementById('main'))
registerServiceWorker()