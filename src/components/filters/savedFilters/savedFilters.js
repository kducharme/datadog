import React from 'react';

class SavedFilter extends React.Component {

    render() {
        return (
            <div className='filters__saved'>
                <p>{this.props.savedFilter}</p>
            </div>
        )
    }
}

export default SavedFilter;
