import React from 'react'
import { Redirect } from 'react-router-dom'

class TokenGen extends React.Component {

  componentWillMount() {
    const code = window.location.href.split('code=')[1].split('&')[0]
    const URL = `https://slack.com/api/oauth.access?client_id=2727337933.211352935332&client_secret=f4e1856f6a0d49a1c34c3c0eca6249ad&code=${code}`

    fetch(URL)
      .then(resp => resp.json())
      .then(data => localStorage.setItem("accessToken", data.access_token))
  }

  waitOrRedirect() {
    return <Redirect to="/show"/>
  }

  render() {
    return this.waitOrRedirect()
  }
}

export default TokenGen
