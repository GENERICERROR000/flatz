import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './components/Login'
import NavBar from './components/NavBar'
import Home from './components/Home'
import ShowContainer from './containers/ShowContainer'

class App extends Component {
  state = {}

  render() {
    return (
      <Router>
        <div>
          <NavBar/>
          <Switch >
            <Route exact path="/" component={Login}/>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/show" component={ShowContainer}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
