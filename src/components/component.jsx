import React from 'react';
import './component.css'
import '../reset.css'
import PostAnotherPosibilites from './posibility/posibility'
import sendedIcon from './images/tick.svg'
function Post(key) {
  return (
    <div className="post">
      <div className="author-inf">
        <img className="avatar" alt="avatar" src={key.author.photo}/>
        <span className="inf">
          <p className="name">{key.author.name}</p>
          <img className="sended-icon" src={sendedIcon} alt="sended"/>
          <p>{key.author.nickname}</p>
          <p className="saparated">|</p>
          <p>{key.date}</p>
        </span>
      </div>
      <div className="between-line"></div>
      <div>
        <div className="main-content">
          <p>{key.content}</p>
          <img className="photo" src={key.image} alt="content"/>  
        </div>
      </div>
      <PostAnotherPosibilites/>
    </div>
  )
}
export default Post