import React from 'react';

class AddRow extends React.Component {

    createRow(e) {
        e.preventDefault();
        // const { rows } = this.state;
        // this.setState({
        //     rows: [...this.state.rows, newRow]
        // })
    }
    
    render() {
        return (
            <button className='pageNav__add--button'>Add monitor +</button>
        )
    }
}

export default AddRow;

// ${this.state.active === navItem ? activeStyle : {}}`}