import React from 'react';

class AddRow extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rows: [
                {
                    status: 'No Data',
                    name: 'Lamba Trail',
                    type: 'Custom',
                    tags: ['Amazon'],
                    owner: 'Meg Armstrong'
                }
            ]
        }
    }

    createRow(e) {
        e.preventDefault();
        const { rows } = this.state;
        const newRow = {
            status: 'Warn',
            name: 'Kafka integration',
            type: 'Integration',
            tags: ['devops', 'launchteam'],
            owner: 'Kyle Ducharme'
        }
        this.setState({
            rows: [...this.state.rows, newRow]
        })
    }
    
    render() {
        console.log(this.state)
        return (
            <button className='pageNav__add--button' onClick={(e) => this.createRow(e)}>Add monitor +</button>
        )
    }
}

export default AddRow;

// ${this.state.active === navItem ? activeStyle : {}}`}