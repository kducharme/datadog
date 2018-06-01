import React from 'react';
import PageRouter from '../../../router'
import { Link } from "react-router-dom";
import AddRow from '../../../pages/addRow';

class PageNavigation extends React.Component {
    
    // constructor() {
    //     super();
    //     this.state = {
    //         active: menuItem
    //     }
    // }


    activePage(e) {
        e.preventDefault;
    }
    
    
    render() {
        return (
            <div className='pageNav'>
                <div className="pageNav__links">
                    <Link className={`pageNav__links--link ${window.location.pathname === '/' ? 'active': null }`} onClick={e => this.activePage(e)} to="/">Monitors</Link>
                    <Link className={`pageNav__links--link ${window.location.pathname === '/downtime' ? 'active': null }`} onClick={e => this.activePage.bind(this)} to="/downtime">Downtime</Link>
                </div>
                <div className="pageNav__add">
                    <AddRow />
                </div>
            </div>
        )
    }
}

export default PageNavigation;