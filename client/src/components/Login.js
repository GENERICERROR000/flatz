import React from 'react'

class Login extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className="ui middle aligned center aligned grid">
        <div className="column">
          <img className="icon" src="https://d1qb2nb5cznatu.cloudfront.net/startups/i/255890-6001436d845bc57af0be3ff007f4bcaa-medium_jpg.jpg?buster=1427129016" /><br/>
          <h2 className="ui image header">
            <div className="content">
              Welcome to Flatz
            </div>
          </h2><br/>

          <a href="https://slack.com/oauth/authorize?scope=identity.basic&client_id=2727337933.211352935332"><img alt="Sign in with Slack" height="40" width="172" src="https://platform.slack-edge.com/img/sign_in_with_slack.png" srcset="https://platform.slack-edge.com/img/sign_in_with_slack.png 1x, https://platform.slack-edge.com/img/sign_in_with_slack@2x.png 2x" /></a>
        </div>
      </div>
    )
  }
}

export default Login
