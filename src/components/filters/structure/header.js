import React from 'react';

class Header extends React.Component {
    state = { 
        title: 'Saved filters'
    }

    render() {
     return <div className='filters__header'>
        <h2>{this.state.title}</h2>
    </div>
    }
} 

export default Header;
