import React from 'react'

class Home extends React.Component {
  state = {
    accessToken: ''
  }

  // componentWillMount() {
  //   const code = window.location.href.split('code=')[1].split('&')[0]
  //   const URL = `https://slack.com/api/oauth.access?client_id=2727337933.211352935332&client_secret=f4e1856f6a0d49a1c34c3c0eca6249ad&code=${code}`
  //
  //   fetch(URL)
  //     .then(resp => resp.json())
  //     .then(data => this.props.setToken(data.access_token))
  // }

  fetchToken() {
    const code = window.location.href.split('code=')[1].split('&')[0]
    const URL = `https://slack.com/api/oauth.access?client_id=2727337933.211352935332&client_secret=f4e1856f6a0d49a1c34c3c0eca6249ad&code=${code}`

    fetch(URL)
      .then(resp => resp.json())
      .then(data => console.log(data.access_token))
  }


  render() {
    if (!this.state.accessToken) {
      this.fetchToken()
      return (
        <h1>{this.state.accessToken}</h1>
      )
    } else {
      return (<div>missed</div>)
    }
  }
}

export default Home
