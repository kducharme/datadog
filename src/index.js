import React from 'react';
import ReactDOM from 'react-dom'
import { render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from "react-router-dom"

// Page components
import Table from './components/table/table'
import PrimaryNavigation from './components/navigation/primary/primaryNav';

ReactDOM.render(
    <Router>
        <div className='application'>
            <PrimaryNavigation />
            <Table />
        </div>
    </Router>
    , document.getElementById('main'))
registerServiceWorker()