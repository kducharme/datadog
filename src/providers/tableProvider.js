import React from "react";

export const TableContext = React.createContext();

export class TableProvider extends React.Component {
  state = {
    selectedRows: []
  };

  allSelectedRows = function(e, id) {
    if (e.currentTarget.checked) {
      this.setState(prevState => ({
        selectedRows: [...prevState.selectedRows, id]
      }));
      console.log(this.state.selectedRows);
    }
    if (!e.currentTarget.checked) {
      this.setState(prevState => ({
        selectedRows: this.state.selectedRows.filter(row => {
          return row !== id;
        })
      }));
      console.log(this.state.selectedRows);
    }
  };

  render() {
    return (
      <TableContext.Provider
        value={{
          state: this.state.selectedRows,
          addRows: this.allSelectedRows.bind(this)
        }}
      >
        {this.props.children}
      </TableContext.Provider>
    );
  }
}
