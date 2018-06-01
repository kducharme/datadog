import React from 'react';
import { Link } from "react-router-dom";
import AddRow from '../../../pages/addRow';

class PageNavigation extends React.Component {
    render() {
        return (
            <div className='pageNav'>
                <div className="pageNav__links">
                    <Link className={`pageNav__links--link ${window.location.pathname === '/' ? 'active': null }`} to="/">Monitors</Link>
                    <Link className={`pageNav__links--link ${window.location.pathname === '/downtime' ? 'active': null }`} to="/downtime">Downtime</Link>
                </div>
                <div className="pageNav__add">
                    <AddRow />
                </div>
            </div>
        )
    }
}

export default PageNavigation;