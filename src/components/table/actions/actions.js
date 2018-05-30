import React from 'react';

class Actions extends React.Component {

    tableSearch = React.createRef();

    searchTable = event => {
        event.preventDefault();
        console.log(this.tableSearch.current.value)
    }

    render() {
        return (
            <div className='actions'>
                <input placeholder='Search monitors' onKeyUp={this.searchTable} ref={this.tableSearch} className='actions__search'></input>
                <p className='actions__results'>Showing 1-25 of 572 monitors<span>(0 selected)</span></p>


            </div>
        )
    }
}

export default Actions;
