import React from "react";

export const TableContext = React.createContext();

export class TableProvider extends React.Component {
  state = {
    selectedRows: [],
    active: false
  };

  activeButtons(e) {
    const tableNodes = document.querySelectorAll('.rows');
    const activeClass = 'rows__row--selected';
    console.log(tableNodes)
    this.setState({
      active: true
    })
  }

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
  };

  render() {
    return (
      <TableContext.Provider
        value={{
          selectedRows: this.state.selectedRows,
          active: this.state.active,
          activeButtons: this.activeButtons.bind(this),
          addRows: this.allSelectedRows.bind(this)
        }}
      >
        {this.props.children}
      </TableContext.Provider>
    );
  }
}
