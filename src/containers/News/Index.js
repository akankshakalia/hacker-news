import React, { Component } from 'react'
import './Index.css'
import News from './News/News'

class NewsBase extends Component {
  render () {
    return <div className="news-container">
      <News />
    </div>
  }
}

export default NewsBase
