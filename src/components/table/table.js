import React from 'react';
import TableHeader from './header/tableHeader';

class Table extends React.Component {
    render() {
        return (
            <div className='table'>
            <TableHeader titles={['Status', 'Name', 'Type', 'Tags', 'Owner']}/>
            
            
            </div>
        )
    }
}

export default Table;
