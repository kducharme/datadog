import React from 'react';

class SavedFilters extends React.Component {

    constructor(props) {

    }

    constcreateList = () => {
        const savedFilters = ['Integrations & alert status only', 'Lambda migration', 'Monitors without data', 'Re-platforming team', 'Testing & QA environment'];
        const button = 'View all saved filters'
        const filterList = savedFilters.map(filter => {
            <li>{filter}</li>
        })
        return <ul>{filterList}</ul>
    }

    render() {
        return (
            <div className='filters__saved'>
                <p>{this.props.savedFilter}</p>
            </div>
        )
    }
}

export default SavedFilters;
