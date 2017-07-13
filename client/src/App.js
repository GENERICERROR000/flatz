import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from './components/Login'
import NavBar from './components/NavBar'
import Home from './components/Home'
import ShowContainer from './containers/ShowContainer'

class App extends Component {
  state = {
    accessToken: ''
  }
  //save to local storage 

  setToken = (token) => {
    this.setState({
      accessToken: token
    })
  }

  render() {
    console.log(this.state.accessToken, "App")
    return (
      <Router>
        <div>
          <NavBar/>
          <Switch >
            <Route exact path="/" component={Login}/>
            <Route exact path="/home" render={() => <Home setToken={this.setToken}/>}/>
            <Route exact path="/show" render={() => <ShowContainer accessToken={this.state.accessToken}/>}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
