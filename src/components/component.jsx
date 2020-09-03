import React from 'react';
import './component.css'
import '../reset.css'
import messageIcon from './images/comment.svg'
import repostIcon from './images/repost.svg'
import likesIcon from './images/likes.svg'
import shareIcon from './images/share.svg'
import sendedIcon from './images/tick.svg'
const actions = [
  {
    count: 482,
    type: "messages",
    img: messageIcon,
  },
  {
    count: 146,
    type: "reposts",
    img: repostIcon,
  },
  {
    count: 887,
    type: "likes",
    img: likesIcon,
  },
  {
    count: 0,
    type: "share",
    img: shareIcon,
  }
]
function Post(key) {
  return (
    <div className="post">
      <div className="author-inf">
        <img className="avatar" alt="avatar" src={key.author.photo}/>
        <span className="inf">
          <p className="name">{key.author.name}</p>
          <img className="sended-icon" src={sendedIcon} alt="sended"/>
          <p className="nickname">{key.author.nickname}</p>
          <p className="saparated">|</p>
          <p className="date">{key.date}</p>
        </span>
      </div>
      <div className="between-line"></div>
      <div className="content">
        <div className="main-content">
          <p className="message">{key.content}</p>
          <img className="photo" src={key.image} alt="content"/>  
        </div>
      </div>
      <div className="another-possibility">
        <span className="icon-and-his-count">
          <img className="icon" src={actions[0].img} alt={actions[0].type}/>
          <p className="amount">{actions[0].count}</p>
        </span>  
        <span className="icon-and-his-count">
          <img className="icon" src={actions[1].img} alt={actions[1].type}/>
          <p className="amount">{actions[1].count}</p>
        </span> 
        <span className="icon-and-his-count">
          <img className="icon" src={actions[2].img} alt={actions[2].type}/>
          <p className="amount">{actions[2].count}</p>
        </span> 
        <span className="icon-and-his-count">
          <img className="icon" src={actions[3].img} alt={actions[3].type}/>
          <p className="amount">{actions[3].count}</p>
        </span> 
      </div>    
    </div>
  )
}
export default Post