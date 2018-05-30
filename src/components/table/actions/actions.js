import React from 'react';
import Search from './search/search';

class Actions extends React.Component {

    tableSearch = React.createRef();

    // searchTable = event => {
    //     const searchVal = this.tableSearch.current.value;
    //     if (searchVal) {
    //         console.log(searchVal)
    //     }
    // }

    render() {
        return (
            <div className='actions'>
                <input placeholder='Search monitors' onKeyUp={Search.searchTable} ref={this.tableSearch} className='actions__search'></input>
                <p className='actions__results'>Showing 1-25 of 572 monitors<span>(0 selected)</span></p>


            </div>
        )
    }
}

export default Actions;
