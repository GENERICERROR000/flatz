import React, { Component } from 'react';
import './App.css';
import Login from './components/Login'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Show from './components/Show'

class App extends Component {
  state = {
    accessToken: ''
  }

  setToken = (token) => {
    this.setState({
      accessToken: token
    })
  }

  render() {
    return (
        <Router>
          <Switch>
            <Route exact path='/login' component={Login}/>
            <Route path='/' render={
                () => {
                  return(
                    <div className='app'>
                      <NavBar/>
                      <Route path='/home' render={() => <Home setToken={this.setToken} />}/>
                      <Route path='/home' component={Show}/>
                    </div>
                  )
                }
              }
            />
          </Switch>
        </Router>

    );
  }
}

export default App;
