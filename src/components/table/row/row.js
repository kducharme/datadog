import React from 'react';
import TableButtons from '../actions/buttons/tableButtons';

class Row extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            allRows: [],
            selectedRows: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:4000/rows')
            .then(rows => { return rows.json() })
            .then(rows => {
                this.setState({
                    allRows: [...rows]
                })
            })
    }

    selectRow(e, id) {
        if (e.currentTarget.checked) {
            this.setState(prevState => ({
                selectedRows: [...prevState.selectedRows, id],
            }))
            e.target.parentElement.classList.toggle('rows__row--selected')
            
        }
        if (!e.currentTarget.checked) {
            this.setState(prevState => ({
                selectedRows: this.state.selectedRows.filter(row => {
                    return row !== id 
                }),
            }))
            e.target.parentElement.classList.toggle('rows__row--selected')
        }
    }

    render() {
        return (
            <div className='rows'>
                {this.state.allRows.map(row => {
                    return (
                        <div className={'rows__row'} key={row.id} id={row.id}>
                            <input className='rows__row--select table__col col1' type='checkbox' onClick={(e => this.selectRow(e, row.id))}></input>

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
