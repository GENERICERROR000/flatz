import React, { Component } from 'react';
import './App.css';
import Login from './components/Login'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import NavBar from './components/NavBar'

class App extends Component {
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
                      <Route path='/home' component={Home}/>
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
