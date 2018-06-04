import React from "react";
import {
  TableProvider,
  TableContext
} from "../../../../providers/tableProvider";

class TableButtons extends React.Component {
  Mute() {
    console.log("mute");
  }

  Resole() {
    console.log("resolve");
  }

  Edit() {
    console.log("edit");
  }

  Duplicate(row) {
    console.log("duplicate");
  }

  Delete(rows, value) {
    rows.forEach(row => {
      fetch(`http://localhost:4000/rows/${row}`, {
        method: "DELETE"
      }).then(value.deleteRows(row));
    })
  }

  render() {
    return (
      <TableContext.Consumer>
        {value => {
          return (
            <div className="actions__buttons">
              {this.props.buttons.map(m => {
                return (
                  <button
                    key={m}
                    className={`
                        actions__buttons--button 
                        ${!value.active ? "disabled__button" : null}
                    `}
                    disabled={!value.active ? true : false}
                    onClick={() => this[m](value.selectedRows, value)}
                  >
                    {m}
                  </button>
                );
              })}
            </div>
          );
        }}
      </TableContext.Consumer>
    );
  }
}

export default TableButtons;
