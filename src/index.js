import React from 'react';
import ReactDOM from 'react-dom'
import { render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from "react-router-dom"

// Page components
import Table from './components/table/table'
import Filters from './components/filters/structure/filters'
import PrimaryNavigation from './components/navigation/primary/primaryNav';
import PageNavigation from './components/navigation/page/pageNav';
import Header from './components/table/header/header';

ReactDOM.render(
    <Router>
        <div className='application'>
            <PrimaryNavigation />
            <div className='application__content'>
                <PageNavigation />
                <div className='application__content--row'>
                    <Filters />
                    <div className='application__content--table'>
                        <Header />
                        <Table />
                    </div>
                </div>
            </div>
        </div>
    </Router>
    , document.getElementById('main'))
registerServiceWorker()