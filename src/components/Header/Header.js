import React, {Component, useState} from 'react';
import { withRouter } from 'react-router-dom';
import logo from '../../assets/images/y18.gif'
import './Header.scss';

class Header extends Component{
    
    constructor(props) {
        super(props);
      }

    render(){
        return <div className="header">
            <img src={logo} lt="Logo"/>
            <nav>
                <ul>
                    <li><a href="/" className={this.props.location.pathname === '/' ? 'active': ''}>top</a></li>
                    <li><a href="/new" className={this.props.location.pathname=== '/new' ? 'active': ''}>new</a></li>
                </ul>
            </nav>
        </div>
    }
}

export default withRouter(Header);