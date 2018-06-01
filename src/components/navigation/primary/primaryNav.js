import React from 'react';

class PrimaryNavigation extends React.Component {
    render() {
        return (
            <div className='primaryNav'>
                <img className='logo' src='img/logo.svg' alt='datadog logo'></img>
                <img className='items' src='img/navitems.svg' alt='datadog logo'></img>
            </div>
        )
    }
}

export default PrimaryNavigation;
