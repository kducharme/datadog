import React from 'react';

class TableButtons extends React.Component {
    constructor(props) {
        super(props)
        this.state = { active: false }
    }

    Mute() {
        console.log('mute')
    }
    Resole() {
        console.log('resolve')
    }
    Edit() {
        console.log('edit')
    }
    Duplicate() {
        console.log('duplicate')
    }
    Delete() {
        console.log('delete')
    }

    render() {
        return (
            <div className='actions__buttons'>
                {this.props.buttons.map(m => {
                    return (
                        <button key={m} className={`actions__buttons--button ${!this.state.active ? 'disabled__button' : null}`} disabled={this.state.active ? true : false } onClick={this[m]}>{m}</button>
                    )
                }
                )}
            </div>
        )
    }
}

export default TableButtons;