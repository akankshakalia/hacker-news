import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import logo from '../../assets/images/y18.gif'
import './Header.scss'
import { Context } from '../../context/NewsContext'
import { updatePage } from '../../services/LocalStorage'
class Header extends Component {
  onTopClick () {
    const page = 1
    this.context.fetch(page, () => {
      updatePage(page)
    })
  }

  render () {
    return <div className="header">
      <img src={logo} alt="Logo"/>
      <nav>
        <ul>
          <li><a onClick={this.onTopClick.bind(this)} className={this.props.location.pathname === '/' ? 'active' : ''}>top</a></li>
          <li>|</li>
          <li><a>new</a></li>
        </ul>
      </nav>
    </div>
  }
}
Header.contextType = Context

Header.propTypes = {
  location: PropTypes.any
}

export default withRouter(Header)
