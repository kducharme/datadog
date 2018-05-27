import React from 'react';
import { render } from 'react-dom';
import Table from './components/table'
import registerServiceWorker from './registerServiceWorker';


render(<Table />, document.querySelector('#main'));
registerServiceWorker();