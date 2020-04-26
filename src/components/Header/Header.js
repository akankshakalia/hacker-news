import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import logo from '../../assets/images/y18.gif'
import './Header.scss'

class Header extends Component {
  render () {
    return <div className="header">
      <img src={logo} lt="Logo"/>
      <nav>
        <ul>
          <li><a href="/" className={this.props.location.pathname === '/' ? 'active' : ''}>top</a></li>
          <li><a href="/new" className={this.props.location.pathname === '/new' ? 'active' : ''}>new</a></li>
        </ul>
      </nav>
    </div>
  }
}

Header.propTypes = {
  location: PropTypes.any
}

export default withRouter(Header)
