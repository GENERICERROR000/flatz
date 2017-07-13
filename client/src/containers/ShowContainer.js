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
