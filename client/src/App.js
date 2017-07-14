import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './components/Login'
import NavBar from './components/NavBar'
import TokenGen from './components/TokenGen'
import Show from './components/Show'
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()

class App extends Component {

  logout = () => {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('jwt')
    this.forceUpdate()
  }

  render() {
    return (
      <Router history={history}>
        <div>
          <NavBar logout={this.logout}/>
          <Switch >
            <Route exact path="/" component={Login}/>
            <Route exact path="/tokengen" component={TokenGen}/>
            <Route exact path="/show" component={Show}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
