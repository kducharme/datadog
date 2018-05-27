import React from 'react';
import SavedFilters from '../savedFilters/savedFilters';
import Header from './header';

class Filters extends React.Component {
    render() {
     return <div className='filters'>
     <Header />
     <SavedFilters />
     
     </div>
    }
} 

export default Filters;
