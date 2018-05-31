import React from 'react';

class TableHeader extends React.Component {

    // ['Status', 'Name', 'Type', 'Tags', 'Owner']

    render() {
        return (
            <div className='header'>
                <input className='header__select col col1' type='checkbox'></input>
                <span className='header__status col col2'>Status</span>
                <p className='header__name table__col col3'>Name</p>
                <p className='header__type table__col col4'>Type</p>
                <p className='header__tags table__col col5'>Tags</p>
                <p className='header__owner table__col col6'>Owner</p>
            </div>
        )
    }
}

export default TableHeader;