import React from 'react'

class Navbar extends React.Component {
  state = {}

  render() {
    return (
      <div className="ui pointing menu">
        <a className="active item">
          Home
        </a>
        <a className="item">
          Profile
        </a>
        <a className="item">
          Flatz Board
        </a>
        <a className="item">
          Logout
        </a>
        <div className="right menu">
          <div className="item">
            <div className="ui transparent icon input">
              <input type="text" placeholder="Search..."/>
              <i className="search link icon"></i>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar
