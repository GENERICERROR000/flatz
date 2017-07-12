import React, { Component } from 'react';
import './App.css';
import Login from './components/Login'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'

class App extends Component {
  render() {
    return (
      <Router>
        <div className='app'>
          <Route exact path='/' component={Login}/>
          <Route path='/home' component={Home}/>
        </div>
      </Router>
    );
  }
}

export default App;
