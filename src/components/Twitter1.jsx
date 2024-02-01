import React from 'react';
// import ReactDOM from 'react-dom/client';
import { BiMessageRounded } from "react-icons/bi";
import { BsRepeat } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { BsUpload } from "react-icons/bs";
import { LuBadgeCheck } from "react-icons/lu";

function Twitter1() {
  return (
    <div className='tweet'>
      <div className='tweet-avatar'>
        <img src='src/images/Tweeter-logo.png'
          alt='cnn-avatar' />
      </div>
      <div className='tweet-content'>
        <div className='tweet-body'>
          <div className='tweet-title'>
            <h4>Twitter</h4>
            <LuBadgeCheck />
            <p>@Twitter.Oct 29</p>
          </div>
          <div className='tweet-text'>
            <p>BIG NEWS lol jk still twitter.</p>
          </div>
        </div>
        <div>
          <div className='tweet-actions'>
            <div>
              <p className='tweet-action'><BiMessageRounded />6.8k</p>
            </div>
            <div >
              <p className='tweet-action'><BsRepeat />36.6k</p>
            </div>
            <div >
              <p className='tweet-action'><CiHeart /> 267.1k</p>
            </div>
            <div >
              <BsUpload />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Twitter1; 