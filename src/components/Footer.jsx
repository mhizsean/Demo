import React, { Component } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <Link to="/" className="pics">
                   <img alt="demo logo" src="/images/ms.jpg"/>
                </Link>
                <div className="rights">
                    @Demo 2019 All rights reserved.
                </div>
            </div>
        );
    }
}

export default Footer;