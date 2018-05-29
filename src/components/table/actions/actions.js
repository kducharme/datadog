import React from 'react';

class Actions extends React.Component {
    render() {
        return (
            <div className='actions'>
                <input placeholder='Search monitors' className='actions__search'></input>
                <p className='actions__results'>Showing 1-25 of 572 monitors<span>(0 selected)</span></p>


            </div>
        )
    }
}

export default Actions;
