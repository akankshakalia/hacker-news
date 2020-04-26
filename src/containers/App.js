import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.scss'
import { Provider } from '../context/NewsContext'
import Header from '../components/Header/Header'
import News from './News/News'
import NotFound from './NotFound/NotFound'

class App extends Component {
  render () {
    return (
      <Provider>
        <BrowserRouter>
          <div className="App">
            <Header />
            <Switch>
              <Route path="/" exact component={News}/>
              <Route component={NotFound}/>
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App
