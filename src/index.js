import React from 'react';
import { render } from 'react-dom';
import Table from './components/table'
import registerServiceWorker from './registerServiceWorker';
import './styles/css/index.css';


render(<Table />, document.querySelector('#main'));
registerServiceWorker();