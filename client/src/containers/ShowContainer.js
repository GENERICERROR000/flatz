import React from 'react'
import Show from '../components/Show'

class ShowContainer extends React.Component {
  state = {
    userInfo: ''
  }

  componentWillMount() {
    const URL = `https://slack.com/api/users.profile.get?token=${this.props.accessToken}`
    console.log(this.props.accessToken, "Show");
    fetch(URL)
      .then(resp => resp.json())
      .then(data => this.setState({
        userInfo: data
      }))
  }

  render() {
    if (this.props.userInfo) {
      return <Show userInfo={this.state.userInfo}/>
    } else {
      return <h1>Loading...</h1>
    }

  }
}

export default ShowContainer
