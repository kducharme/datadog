import React from 'react';

class FilterList extends React.Component {

    render() {
        return (
            <div className='filters__saved individualFilter'>
                <ul>
                    {this.props.filters.map(f => {
                        return (
                            <li className='filters__group--filter' key={f}>
                                <span className='filters__group--left'>
                                    <input className='filterSelect' type='checkbox'></input>
                                    <p>{f}</p>
                                </span>
                                <span className='filters__group--right'>
                                    <p>{parseInt(Math.random() * 100)}</p>
                                </span>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default FilterList;