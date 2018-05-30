import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"

class PageNavigation extends React.Component {
    render() {
        return (
            <div className='pageNav'>
                <span className='pageNav__link active'>Monitors</span>
                <span className='pageNav__link'>Downtime</span>

            </div>
        )
    }
}

export default PageNavigation;
