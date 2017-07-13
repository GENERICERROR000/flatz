import React from 'react'
import '../Show.css'

const Show = (props) => {
  return (
    <div className="profile ui card">
      <div className="image">
        <img src={props.userInfo.user.image_192} alt="User Img"/>
      </div>
      <div className="content">
        <a className="header">{props.userInfo.user.name}</a>
        <div className="description">
          <p>{props.userInfo.user.email}</p>
          <p>Bootcamp: {props.userInfo.team.name}<img src={props.userInfo.team.image_34} alt="Bootcamp Logo" /></p>
        </div>
      </div>
    </div>
  )
}

export default Show
