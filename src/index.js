import React from 'react'
import ReactDOM from 'react-dom'
import 'regenerator-runtime'
import './index.scss'
import App from './containers/App'

ReactDOM.hydrate(<App />, document.getElementById('root'))

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./service-worker.js')
    .then(function (registration) {
      console.log('##Service Worker##  Service Worker registration successful with scope: ',
        registration.scope)
    })
    .catch(function (err) {
      console.log('##Service Worker##  Service Worker registration failed: ', err)
    })
}
