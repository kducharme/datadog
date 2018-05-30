import React from 'react';
import PageRouter from '../../../router'
import { Link } from "react-router-dom";

class PageNavigation extends React.Component {


    render() {
        return (
            <div className='pageNav'>
                <div className="pageNav__links">
                    <Link className='pageNav__links--link active' to="/">Monitors</Link>
                    <Link className='pageNav__links--link' to="/downtime">Downtime</Link>
                </div>
                <div className="pageNav__add">
                    <button className='pageNav__add--button'>Add monitor +</button>
                </div>
            </div>
        )
    }
}

export default PageNavigation;
