import React from "react";
import { TableProvider, TableContext } from "../../../../providers/tableProvider";

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
  Duplicate() {
    console.log("duplicate");
  }
  Delete() {
    console.log("delete");
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
                    className={`actions__buttons--button ${
                      !value.active ? "disabled__button" : null
                    }`}
                    disabled={value.active ? true : false}
                    onClick={this[m]}
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
