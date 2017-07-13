import React from 'react'
import Show from '../components/Show'

class ShowContainer extends React.Component {
  state = {
    userInfo: ''
  }

  componentWillMount() {
    const URL = `https://slack.com/api/users.identity?token=${localStorage.accessToken}`
    fetch(URL)
      .then(resp => resp.json())
      .then(data => this.setState({
        userInfo: data
      }))
      .then(cat => this.sendUserToDB())
  }

  sendUserToDB() {
    const loginParams = {
      name: this.state.userInfo.user.name,
      email: this.state.userInfo.user.email,
      uid: this.state.userInfo.user.id
    }

    fetch('http://localhost:3000/api/v1/auth', {
      method: 'POST',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(loginParams)
    })
    .then(resp => resp.json())
    .then(data => console.log(data))
  }

  waitOrRender() {
    if (this.state.userInfo) {
      return <Show userInfo={this.state.userInfo}/>
    } else {
      return <h1>Loading</h1>
    }
  }

  render() {
    console.log(this.state.userInfo)
    return this.waitOrRender()
  }
}

export default ShowContainer
