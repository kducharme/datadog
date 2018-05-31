import React from 'react';
import PageRouter from '../../../router'
import { Link } from "react-router-dom";
import AddRow from '../../../pages/addRow';

class PageNavigation extends React.Component {
    
    constructor() {
        super();
        this.state = {
            active: 'Monitor'
        }
    }

    isActive = (...value) => {
        console.log('hi')
        return value === this.props.active ? 'active' : ''
    }

    render() {
        const activeStyle = 'active';

        return (
            <div className='pageNav'>
                <div className="pageNav__links">
                    <Link className={'pageNav__links--link'}  to="/">Monitors</Link>
                    <Link className={'pageNav__links--link'} to="/downtime">Downtime</Link>
                </div>
                <div className="pageNav__add">
                    <AddRow />
                </div>
            </div>
        )
    }
}

export default PageNavigation;

// ${this.state.active === navItem ? activeStyle : {}}`}