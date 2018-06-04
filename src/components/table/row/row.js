import React from "react";
import { TableProvider, TableContext } from "../../../providers/tableProvider";

class Row extends React.Component {

  selectRow(e, id) {
    if (e.currentTarget.checked) {
      e.target.parentElement.classList.toggle("rows__row--selected");
    }
    if (!e.currentTarget.checked) {
      e.target.parentElement.classList.toggle("rows__row--selected");
    }
  }

  render() {
    return (
      <TableContext.Consumer>
        {value => {
          return (
            <div className="rows">
              {value.allRows.map(row => {
                return (
                  <div className={"rows__row"} key={row.id} id={row.id}>
                    <input
                      className="rows__row--select table__col col1"
                      type="checkbox"
                      onClick={e => {
                        this.selectRow(e, row.id);
                        value.addRows(e, row.id);
                        value.activeButtons(e);
                      }}
                    />
                    <span className="table__col col2">
                      <p
                        className={`rows__row--status ${row.status.toLowerCase()}`}
                      >
                        {row.status}
                      </p>
                    </span>
                    <p className="rows__row--name table__col col3">
                      {row.name}
                    </p>
                    <p className="rows__row--type table__col col4">
                      {row.type}
                    </p>
                    <p className="rows__row--tags table__col col5">
                      {row.tags}
                    </p>
                    <p className="rows__row--owner table__col col6">
                      {row.owner}
                    </p>
                  </div>
                );
              })}
            </div>
          );
        }}
      </TableContext.Consumer>
    );
  }
}

export default Row;
