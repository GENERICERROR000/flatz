import React from 'react'
import '../Show.css'
import Authenticator3000 from '../containers/Authenticator3000'

class Show extends React.Component {
  
  render(){
    return (
      <div className="profile ui card">
        <div className="image">
          <img src={window.history.state.state.userInfo.user.image_192} alt="User Img"/>
        </div>
        <div className="content">
          <p className="header">{window.history.state.state.userInfo.user.name}</p>
          <div className="description">
            <p>{window.history.state.state.userInfo.user.email}</p>
            <p>Bootcamp: {window.history.state.state.userInfo.team.name}<img src={window.history.state.state.userInfo.team.image_34} alt="Bootcamp Logo" /></p>
          </div>
        </div>
      </div>
    )
  }
}

export default Authenticator3000(Show)
