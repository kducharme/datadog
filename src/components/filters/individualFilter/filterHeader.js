import React from 'react';

class FilterHeader extends React.Component {
    render() {
        return (
            <div className='filters__group--header'>
                <img src='img/chevron.svg' alt='chevron'></img>
                <h4>
                    {this.props.header}
                </h4>
            </div>
        )
    }
}

export default FilterHeader;