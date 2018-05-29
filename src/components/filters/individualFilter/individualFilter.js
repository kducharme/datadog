import React from 'react';

class IndividualFilter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            filters: ['Integrations & alert status only', 'Lambda migration', 'Monitors without data', 'Re-platforming team', 'Testing & QA environment']
        }
    }

    render() {
        return (
            <div className='filters__saved'>
                <ul>
                    {this.state.filters.map(f => {
                        return <li key={f}>{f}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default IndividualFilter;