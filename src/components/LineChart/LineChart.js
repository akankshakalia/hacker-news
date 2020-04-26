import React, { Component } from 'react'
import './LineChart.scss'
import { Context } from '../../context/NewsContext'
import Chart from 'react-google-charts'

class LineChart extends Component {
  render () {
    const { state } = this.context
    const data = state.hits.map((item) => {
      return [item.objectID, item.points]
    })
    data.unshift(['ID', 'Votes'])

    const options = {
      fontSize: 12,
      hAxis: {
        title: 'ID',
        slantedText: true,
        slantedTextAngle: 90,
        titleTextStyle: {
          fontSize: 14,
          italic: false,
          bold: true
        }
      },
      vAxis: {
        title: 'Votes',
        titleTextStyle: {
          fontSize: 14,
          italic: false,
          bold: true
        }
      },
      legend: 'none',
      pointShape: 'circle',
      pointSize: 8

    }
    return <div className="chart">
      <Chart
        chartType="LineChart"
        width="100%"
        height="500px"
        data={data}
        options={options}
      />
    </div>
  }
}
LineChart.contextType = Context

export default LineChart
