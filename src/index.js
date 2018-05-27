import React from 'react';
import ReactDOM from 'react-dom'
import { render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from "react-router-dom"

// Page components
import Table from './components/table/table'
import Filters from './components/filters/filters'
import PrimaryNavigation from './components/navigation/primary/primaryNav';
import PageNavigation from './components/navigation/page/pageNav';

ReactDOM.render(
    <Router>
        <div className='application'>
            <PrimaryNavigation />
            <div className='application__right'>
                <PageNavigation />
                <div className='application__right--content'>
                    <Filters />
                    <Table />
                </div>
            </div>
        </div>
    </Router>
    , document.getElementById('main'))
registerServiceWorker()