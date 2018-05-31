import React from 'react';
import Search from './search/search';
import TableButtons from './buttons/tableButtons';

class Actions extends React.Component {

    tableSearch = React.createRef();

    render() {
        return (
            <div className='actions'>
                <input placeholder='Search monitors' onKeyUp={Search.searchTable} ref={this.tableSearch} className='actions__search'></input>
                <span className="actions__row">
                    <p className='actions__results'>Showing 1-25 of 572 monitors<span>(0 selected)</span></p>
                    <TableButtons buttons={['Mute', 'Resole', 'Edit', 'Duplicate', 'Delete']} />
                </span>
            </div>
        )
    }
}

export default Actions;
