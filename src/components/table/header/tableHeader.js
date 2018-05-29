import React from 'react';

class TableHeader extends React.Component {

    render() {
        return (
            <div className='header'>
                <input className='header__selectAll' type='checkbox'></input>
                {this.props.titles.map(title => {
                    return <p className='header__title'key={title}>{title}</p>
                })}
            </div>
        )
    }
}

export default TableHeader;