import React, { Component } from 'react'
import './News.scss'
import NewsItem from '../../components/NewsItem/NewsItem'
import { Context } from '../../context/NewsContext'
import { updatePage, getPage } from '../../services/LocalStorage'
import Chart from '../../components/LineChart/LineChart'
class News extends Component {
  componentDidMount () {
    const page = getPage() || 1
    this.context.fetch(page, (newPage) => {
      updatePage(newPage)
    })
  }

  onNext () {
    if (this.context.state.page < this.context.state.nbPages) {
      this.context.fetch(this.context.state.page + 1, (newPage) => {
        updatePage(newPage)
      })
    }
  }

  render () {
    const { state } = this.context
    const loaderTemplate = <div className="loading">Loading...</div>
    const errorTemplate = <div className="loading">Please try again later!!!</div>
    return <div className="news">
      {!state.hits.length ? (state.error ? errorTemplate : loaderTemplate)
        : state.hits.map((item, index) => {
          return <NewsItem key={item.objectID} item={item} rowIndex={index}/>
        })
      }
      {
        state.hits.length && this.context.state.page !== (this.context.state.nbPages - 1)
          ? <div className="more" onClick={this.onNext.bind(this)}>More</div>
          : null
      }
      <Chart />
    </div>
  }
}

News.contextType = Context

export default News
