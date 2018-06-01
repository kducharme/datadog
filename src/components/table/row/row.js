import React from 'react';
import TableProvider from '../tableContext';


class Row extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            allRows: []
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
            }));
            e.target.parentElement.classList.toggle('rows__row--selected');
            this.props.activeTable;
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
                            <TableContext.Consumer>
                                {(context) => (
                                    <React.Fragment>
                                        <input
                                            className='rows__row--select table__col col1'
                                            type='checkbox'
                                            onClick={context.selectRow}
                                        ></input>
                                        <span className='table__col col2'><p className={`rows__row--status ${(row.status).toLowerCase()}`}>{row.status}</p></span>
                                        <p className='rows__row--name table__col col3'>{row.name}</p>
                                        <p className='rows__row--type table__col col4'>{row.type}</p>
                                        <p className='rows__row--tags table__col col5'>{row.tags}</p>
                                        <p className='rows__row--owner table__col col6'>{row.owner}</p>
                                    </React.Fragment>
                                )}
                            </TableContext.Consumer>
                        </div>
                    )
                })}

            </div>
        )
    }
}

export default Row;
