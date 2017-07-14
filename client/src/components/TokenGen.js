import React from 'react'
import { Redirect } from 'react-router-dom'
import Delay from 'react-delay'

class TokenGen extends React.Component {
  state = {
    userInfo: ''
  }

  componentWillMount() {
    const code = window.location.href.split('code=')[1].split('&')[0]
    const AccessTokenURL = `https://slack.com/api/oauth.access?client_id=2727337933.211352935332&client_secret=f4e1856f6a0d49a1c34c3c0eca6249ad&code=${code}`

    fetch(AccessTokenURL)
      .then(resp => resp.json())
      .then(data => localStorage.setItem("accessToken", data.access_token))
      .then(() => {
        const UserInfoURL = `https://slack.com/api/users.identity?token=${localStorage.accessToken}`
        fetch(UserInfoURL)
          .then(resp => resp.json())
          .then(data => this.setState({
            userInfo: data
          }))
          .then(() => {
            fetch('http://localhost:3000/api/v1/auth', {
              method: 'POST',
              headers: {
                "content-type": "application/json"
              },
              body: JSON.stringify({
                name: this.state.userInfo.user.name,
                email: this.state.userInfo.user.email,
                uid: this.state.userInfo.user.id
              })
            })
            .then(resp => resp.json())
            .then(data => localStorage.setItem("jwt", data.jwt))
          })
      })
  }

  waitOrRender() {
    if (this.state.userInfo) {
      return (
        <Redirect to={{
          pathname: '/show',
          state: { userInfo: this.state.userInfo }
        }}/>
      )
    } else {
      return <h1>Loading...</h1>
    }
  }

  render() {
    return(
      <Delay wait={1000}>
        {this.waitOrRender()}
      </Delay>
    )
  }
}

export default TokenGen
