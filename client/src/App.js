import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './components/Login'
import NavBar from './components/NavBar'
import TokenGen from './components/TokenGen'
import ShowContainer from './containers/ShowContainer'
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <NavBar/>
          <Switch >
            <Route exact path="/" component={Login}/>
            <Route exact path="/tokengen" component={TokenGen}/>
            <Route exact path="/show" component={ShowContainer}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
