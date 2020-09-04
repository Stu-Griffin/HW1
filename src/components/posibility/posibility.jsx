import React from "react";
import messageIcon from "../images/comment.svg";
import repostIcon from "../images/repost.svg";
import likesIcon from "../images/likes.svg";
import shareIcon from "../images/share.svg";
import "./posibility.css";
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
  },
];
const PostAnotherPosibilites = (key) => {
  return (
    // <div className="another-possibility">
    //     <span className="icon-and-his-count">
    //         <img className="icon" src={actions[0].img} alt={actions[0].type}/>
    //         <p className="amount">{actions[0].count}</p>
    //     </span>
    //     <span className="icon-and-his-count">
    //         <img className="icon" src={actions[1].img} alt={actions[1].type}/>
    //         <p className="amount">{actions[1].count}</p>
    //     </span>
    //     <span className="icon-and-his-count">
    //         <img className="icon" src={actions[2].img} alt={actions[2].type}/>
    //         <p className="amount">{actions[2].count}</p>
    //     </span>
    //     <span className="icon-and-his-count">
    //         <img className="icon" src={actions[3].img} alt={actions[3].type}/>
    //         <p className="amount">{actions[3].count}</p>
    //     </span>
    // </div>
    <div className="another-possibility">
      {actions.map((el) => {
          return (
            <span className="icon-and-his-count">
            <img className="icon" src={el.img} alt={el.type} />
            <p className="amount">{el.count}</p>
            </span>
          )
      })}
    </div>
  );
}
export default PostAnotherPosibilites;
