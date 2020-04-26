import React from 'react'
import ReactDOM from 'react-dom'
import 'regenerator-runtime'
import './index.scss'
import App from './containers/App'

ReactDOM.hydrate(<App />, document.getElementById('root'))
