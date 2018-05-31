import React from 'react';

class TableButtons extends React.Component {

    render() {
        return (
            <div className='actions__buttons'>
                {this.props.buttons.map(m => {
                    return (
                        <button key={m} className='actions__buttons--button'>{m}</button>
                    )
                }
                )}
            </div>
        )
    }
}

export default TableButtons;