import React from 'react';
import PageRouter from '../../../router'
import { Link } from "react-router-dom";

class PageNavigation extends React.Component {

    render() {
        return (
            <div className='pageNav'>
                <div className="pageNav__links">
                <Link className='pageNav__link active'to="/">Monitors</Link>
                <Link className='pageNav__link'to="/downtime">Downtime</Link>
                </div>
                <div className="pageNav__add">
                </div>
            </div>
        )
    }
}

export default PageNavigation;
