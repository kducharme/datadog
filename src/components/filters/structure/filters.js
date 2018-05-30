import React from 'react';
import SavedFilter from '../savedFilters/savedFilters';
import Header from './header';
import FilterHeader from '../individualFilter/filterHeader';
import FilterList from '../individualFilter/filterList';

class Filters extends React.Component {
    render() {
        return (
            <div className='filters'>
                <div className='filters__block'>
                    <Header title='Saved views' />
                    <SavedFilter />
                </div>
                <div className='filters__block'>
                    <Header title='Filters' />
                    <FilterHeader header='Status'/>
                    <FilterList filters={['Ok', 'Warn', 'Alert', 'No Data']}/>
                    <FilterHeader header='Type'/>
                    <FilterList filters={['APM', 'Composite', 'Custom', 'Event', 'Host', 'Integration', 'Metric', 'Network', 'Outlier', 'Process']}/>
                </div>

            </div>
        )
    }
}

export default Filters;