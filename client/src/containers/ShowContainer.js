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
      // .then(() => this.sendUserToDB())
  }

  sendUserToDB() {
    const loginParams = {
      name: this.state.userInfo.user.name,
      email: this.state.userInfo.user.email,
      uid: this.state.userInfo.user.id
    }

    fetch('', {
      method: 'POST',
      headers: '',
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
    return this.waitOrRender()
  }
}

export default ShowContainer
