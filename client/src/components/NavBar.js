import React from 'react'

class Navbar extends React.Component {
  render() {
    return (
      <div className="ui pointing menu">
        <a className="item">
          Home
        </a>
        <a className="item">
          Profile
        </a>
        <a className="item">
          Flatz Board
        </a>
        <div className="right menu">
          {localStorage.jwt ? <a className="item" onClick={this.props.logout}>Sign Out</a> : <a className="item">Click Dat Slack Button</a>}
        </div>
      </div>
    )
  }
}

export default Navbar
