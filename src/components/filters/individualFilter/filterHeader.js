import React from 'react';

class FilterHeader extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className='filters__group--header'>
                <img src='img/chevron.svg'></img>
                <h4>
                    {this.props.header}
                </h4>
            </div>
        )
    }
}

export default FilterHeader;