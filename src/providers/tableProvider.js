import React from "react";

export const TableContext = React.createContext();

export class TableProvider extends React.Component {
  state = {
    allRows: [],
    selectedRows: [],
    active: false
  };

  componentDidMount() {
    fetch("http://localhost:4000/rows")
    .then(rows => {
      return rows.json();
    })
    .then(rows => {
      this.setState({
        allRows: [...rows]
      });
    });
  }

  deleteRows = function(id) {
    this.setState(prevState => ({
      allRows: this.state.allRows.filter(row => {
        return row.id !== id;
      })
    }));
  }

  activeButtons(e) {
    const allRows = document.querySelectorAll(".rows")[0].childNodes;
    const activeClass = "rows__row--selected";
    for (let i = 0; i < allRows.length; i++) {
      if (allRows[i].classList.contains(activeClass)) {
        this.setState({
          active: true
        });
        break;
      }
      if (!allRows[i].classList.contains(activeClass)) {
        this.setState({
          active: false
        });
      }
    }
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
          allRows: this.state.allRows,
          selectedRows: this.state.selectedRows,
          active: this.state.active,
          activeButtons: this.activeButtons.bind(this),
          addRows: this.allSelectedRows.bind(this),
          deleteRows: this.deleteRows.bind(this)
        }}
      >
        {this.props.children}
      </TableContext.Provider>
    );
  }
}
