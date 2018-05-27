import React from 'react';
import SavedFilter from '../savedFilters/savedFilters';
import Header from './header';

class Filters extends React.Component {
    render() {
     return <div className='filters'>
     <Header />
     <SavedFilter savedFilter='Integrations & alert status only' />
     <SavedFilter savedFilter='Lambda migration' />
     <SavedFilter savedFilter='Monitors without data' />
     <SavedFilter savedFilter='Re-platforming team' />
     <SavedFilter savedFilter='Testing & QA environment' />
     
     </div>
    }
} 

export default Filters;