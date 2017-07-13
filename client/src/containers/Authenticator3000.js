import React, {Component} from 'react'
import { Redirect } from 'react-router-dom'

const Authenticator3000 = BaseComponent => {
  return class Auth extends Component {
    state = {
      isLoggedIn: false
    }

    componentDidMount(){
      if (localStorage.getItem('jwt')) {
        this.currentUser()
          .then(res => {
            if (res.valid) {
              console.log("valid", res.valid);
              this.setState({isLoggedIn: true})
            } else {
              console.log("not valid");
              this.props.history.push('/')
            }
          })
        }
    }

    currentUser() {
      return fetch('http://localhost:3000/api/v1/me', {
        headers: this.headers()
      })
      .then(res => res.json())
    }

    headers() {
    return {
      'content-type': 'application/json',
      'accept': 'application/json',
      'Authorization': localStorage.getItem('jwt')
      }
    }

    shouldIStayOrShouldIGo(){
      if(localStorage.getItem('jwt')){
        console.log("logged in");
          return <BaseComponent />
        } else {
          console.log("no token");
          return <Redirect to="/"/>
        }
    }

    render () {
      return this.shouldIStayOrShouldIGo()
    }
  }
}

export default Authenticator3000
