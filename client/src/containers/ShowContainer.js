import React from 'react'
import Show from '../components/Show'

class ShowContainer extends React.Component {
  state = {
    userInfo: ''
  }

  componentWillMount() {
    const URL = `https://slack.com/api/users.profile.get?token=${localStorage.accessToken}&`
    console.log(localStorage.accessToken, URL)
    fetch(URL)
      .then(resp => resp.json())
      .then(a => console.log(a))
      // .then(data => this.setState({
      //   userInfo: data.profile
      // }))
  }

  waitOrRedirect() {
    if (this.state.userInfo) {
      return <Show userInfo={this.state.userInfo}/>
    } else {
      return <h1>Loading...</h1>
    }
  }

  render() {
    return this.waitOrRedirect()
  }
}

export default ShowContainer
