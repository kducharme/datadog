import React from 'react';

class FilterList extends React.Component {

    render() {
        return (
            <div className='filters__saved individualFilter'>
                <ul>
                    {this.props.filters.map(f => {
                        return <li key={f}>{f}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default FilterList;