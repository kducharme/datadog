import React from 'react';
import ReactDOM from 'react-dom'
import { render } from 'react-dom';
import Table from './components/table/table'
import Navigation from './components/navigation/nav'
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from "react-router-dom"

ReactDOM.render(
    <Router>
        <div>
            <Table />
        </div>
    </Router>
    , document.getElementById('main'))
registerServiceWorker()