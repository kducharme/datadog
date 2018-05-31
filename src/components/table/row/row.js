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
                            <input className='rows__row--select table__col col1' type='checkbox'></input>
                            <span className='table__col col2'><p className={`rows__row--status ${(row.status).toLowerCase()}`}>{row.status}</p></span>
                            <p className='rows__row--name table__col col3'>{row.name}</p>
                            <p className='rows__row--type table__col col4'>{row.type}</p>
                            <p className='rows__row--tags table__col col5'>{row.tags}</p>
                            <p className='rows__row--owner table__col col6'>{row.owner}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Row;
