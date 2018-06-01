import React from 'react';

class TableButtons extends React.Component {
    constructor(props) {
        super(props)
        this.state = { active: false }
    }

    render() {
        return (
            <div className='actions__buttons'>
                {this.props.buttons.map(m => {
                    return (
                        <button key={m} className={`actions__buttons--button ${this.state.active}`}>{m}</button>
                    )
                }
                )}
            </div>
        )
    }
}

export default TableButtons;