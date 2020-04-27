import React from 'react'
import ReactDOM from 'react-dom'
import 'regenerator-runtime'
import './index.scss'
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.hydrate(<App />, document.getElementById('root'))
registerServiceWorker()

// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker
//     .register('./service-worker.js')
//     .then(function () { console.log('Service Worker Registered') })
// }
