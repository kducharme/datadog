import React from 'react';
import Table from '../components/table/table'
import Filters from '../components/filters/structure/filters'
import PrimaryNavigation from '../components/navigation/primary/primaryNav';
import PageNavigation from '../components/navigation/page/pageNav';
import Actions from '../components/table/actions/actions';

const DowntimePage = () => (
    <div className='application'>
        <PrimaryNavigation />
        <div className='application__content'>
            <PageNavigation />
            <div className='application__content--row'>
                <Filters />
                <div className='application__content--table'>
                downtime page
                </div>
            </div>
        </div>
    </div>
)

export default DowntimePage;
