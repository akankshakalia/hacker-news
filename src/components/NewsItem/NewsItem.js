import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './NewsItem.scss'
import { formatDistance } from '../../utils/dateUtil'

class NewsItem extends Component {
  constructor (props) {
    super(props)
    this.data = props.item
    this.rowIndex = props.rowIndex
  }

  getPointsColorCode (value) {
    if (value < 50) {
      return 'points black'
    } else if (value < 75) {
      return 'points darkred'
    } else if (value < 100) {
      return 'points red'
    } else {
      return 'points orange'
    }
  }

  render () {
    const diff = Math.round((new Date().getTime() - new Date(this.data.created_at).getTime()) / (60 * 1000))
    const diffText = diff > 60 ? formatDistance(diff, 'hour') : formatDistance(diff, 'min')
    let url = this.data.url ? this.data.url.split('/') : null
    url = url ? url[2].replace('www.', '') : null
    return <div className={`news-item ${this.rowIndex % 2 === 0 ? 'even' : 'odd'}`}>
      <div className="comments" title="Comments">{this.data.num_comments}</div>
      <div className={this.getPointsColorCode(this.data.points)} title="Points">
        {this.data.points}
        <div className="arrow-up" title="Upvote"></div>
      </div>
      <div className="title" title="Title">{this.data.title}</div>
      <div className="url" title="Link"><a href={this.data.url}>({url})</a></div>
      <div className="author" title="Author"><label className="prefix">by </label> {this.data.author}</div>
      <div className="time" title="When">{diffText}</div>
      <div className="hide">[<label className="title">hide</label>]</div>
    </div>
  }
}

NewsItem.propTypes = {
  item: PropTypes.any,
  rowIndex: PropTypes.any
}

export default NewsItem
