import React, {Component, useState} from 'react';
import logo from '../../assets/images/y18.gif'
import './Header.scss';

class Header extends Component{
    
    constructor(props) {
        super(props);
        this.state = {activeLink: 'top'};
      }

    toggleLink(link){
        switch(link){
            case 'top':
                this.setState({activeLink: 'top'});
                break;
            case 'new':
                this.setState({activeLink: 'new'});
                break;
        }
    }

    render(){
        return <div className="header">
            <img src={logo} lt="Logo"/>
            <nav>
                <ul>
                    <li onClick={()=>{this.toggleLink('top')}}><a href="/" className={this.state.activeLink === 'top' ? 'active': ''}>top</a></li>
                    <li onClick={()=>{this.toggleLink('new')}}><a href="/new" className={this.state.activeLink === 'new' ? 'active': ''}>new</a></li>
                </ul>
            </nav>
        </div>
    }
}

export default Header;