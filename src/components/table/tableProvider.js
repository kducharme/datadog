import React from "react";

export const TableContext = React.createContext();

class TableProvider extends React.Component {
  state = {
    selectedRows: []
  };

  allSelectedRows = function(e, id) {
    if (e.currentTarget.checked) {
      this.setState(prevState => ({
        selectedRows: [...prevState.selectedRows, id]
      }));
    }
    if (!e.currentTarget.checked) {
      this.setState(prevState => ({
        selectedRows: this.state.selectedRows.filter(row => {
          return row !== id;
        })
      }));
    }
    console.log(this.state.selectedRows);
  };

  render() {
    return (
      <TableContext.Provider
        value={{
          state: this.state.selectedRows.bind(this),
          addRows: this.allSelectedRows.bind(this)
        }}
      >
        {this.props.children}
      </TableContext.Provider>
    );
  }
}

export default TableProvider;
