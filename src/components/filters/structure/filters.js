import React from 'react';
import SavedFilter from '../savedFilters/savedFilters';
import Header from './header';

class Filters extends React.Component {
    render() {
        return (
            <div className='filters'>
                <div className='filters__block'>
                    <Header title='Saved filters' />
                    <SavedFilter />
                    <Header title='Filters' />
                </div>

            </div>
        )
    }
}

export default Filters;