import React from 'react'
import ReactDOM from 'react-dom'
import 'regenerator-runtime'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './index.scss'
import App from './containers/App'

ReactDOM.hydrate(<App />, document.getElementById('root'))
