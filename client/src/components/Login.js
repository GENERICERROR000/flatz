import React from 'react'
import logo from '../FIS-Inverted.svg'

class Login extends React.Component {
  render() {
    return (
      <div className="ui middle aligned center aligned grid">
        <div className="column">
          <img className="icon" src={logo} alt="logo"/><br/>
          <h2 className="ui image header">
            <div className="content">
              Welcome to Flatz
            </div>
          </h2><br/>

        <a href="https://slack.com/oauth/authorize?scope=identity.basic&client_id=2727337933.211352935332"><img alt="Sign in with Slack" height="40" width="172" src="https://platform.slack-edge.com/img/sign_in_with_slack.png" srcSet="https://platform.slack-edge.com/img/sign_in_with_slack.png 1x, https://platform.slack-edge.com/img/sign_in_with_slack@2x.png 2x"/></a>
        </div>
      </div>
    )
  }
}

export default Login
