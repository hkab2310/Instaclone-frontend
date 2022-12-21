import React from "react";
import heart from "../Images/heart.png";
import send from "../Images/send.png";
import '../styles/PostCard.css'

export default function PostCard({ user, image }) {
    return <div className="post-card">
        <div className="post-card-topSec">
            <div className="topSec-left">
                <p className="name">&nbsp;{user.name}</p>
                <p className="location">&nbsp;{user.location}</p>
            </div>
            <div className="topSec-right">
                <h5>...</h5>
            </div>
        </div>
        <div className="image-con">
            <img src={image} width="400px" alt="Not Found" />
        </div>


        <div className="post-card-botSec">
            <div className="bottom-img">
                &nbsp;
                <img className="icon" src={heart} alt="Not Found" width='20px' />
                &nbsp;&nbsp;
                <img className="icon" src={send} alt="Not Found" width="20px" />
            </div>
            <p className="bottom-date">{user.date}</p>
            <p className="bottom-likes">&nbsp;{user.likes} likes</p>
            <h4 className="bottom-header">&nbsp;{user.description}</h4>
        </div>
    </div>
}