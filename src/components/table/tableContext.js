import React from 'react';

export const TableContext = React.createContext();

class TableProvider extends React.Component {
    state = {
        selectedRows: []
    }
    render() {
        return (
            <TableContext.Provider value={{
                state: this.state,
                selectRow: (e, id) => {
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
            }}>
                {this.props.children}
            </TableContext.Provider>
        )
    }

}

export default TableProvider;
