import React from 'react';

class Row extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rows: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:4000/rows")
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
                        <span className="rows__row" key={row.id}>
                            <input className='rows__row--select' type='checkbox'></input>
                            <span className='rows__row--status col1'>{row.status}</span>
                            <p className="rows__row--name">{row.name}</p>
                            <p className="rows__row--type">{row.type}</p>
                            <p className="rows__row--tags">{row.tags}</p>
                            <p className="rows__row--owner">{row.owner}</p>
                        </span>
                    )
                })}
            </div>
        )
    }
}

export default Row;
