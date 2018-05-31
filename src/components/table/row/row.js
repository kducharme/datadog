import React from 'react';

class Row extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rows: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:4000/rows')
            .then(rows => { return rows.json() })
            .then(rows => {
                this.setState({
                    rows: [...rows]
                })
            })
    }

    render() {
        return (
            <div className='rows'>
                {this.state.rows.map(row => {
                    return (
                        <div className='rows__row' key={row.id}>
                            <input className='rows__row--select col col1' type='checkbox'></input>
                            <span className='col col2'><p className='rows__row--status'>{row.status}</p></span>
                            <p className='rows__row--name col col3'>{row.name}</p>
                            <p className='rows__row--type col col4'>{row.type}</p>
                            <p className='rows__row--tags col col5'>{row.tags}</p>
                            <p className='rows__row--owner col col6'>{row.owner}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Row;
