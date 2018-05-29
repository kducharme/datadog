import React from 'react';

class FilterHeader extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <h4 className='filters__group--header'>
                {this.props.header}
            </h4>
        )
    }
}

export default FilterHeader;