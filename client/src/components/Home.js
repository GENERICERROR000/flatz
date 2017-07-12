import React from 'react'

class Home extends React.Component {
  state = {
    userData: []
  }

  componentWillMount() {
    const code = window.location.href.split('code=')[1].split('&')[0]
    const URL = `https://slack.com/api/oauth.access?client_id=2727337933.211352935332&client_secret=f4e1856f6a0d49a1c34c3c0eca6249ad&code=${code}`

    fetch(URL)
      .then(resp => resp.json())
      .then(data => this.setState({
        userData: data
      }))
  }

  render() {
    console.log(this.state.userData);
    return (
      <div>
        <h1>{this.state.userData.user ? this.state.userData.name : 'loading...'}</h1>
      </div>
    )
  }
}

export default Home
