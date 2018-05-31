import React from 'react';
import TableHeader from './header/tableHeader';
import Row from './row/row';

class Table extends React.Component {
    render() {
        return (
            <div className='table'>
                <TableHeader titles={['Status', 'Name', 'Type', 'Tags', 'Owner']} />
                <Row />
            </div>
        )
    }
}

export default Table;
