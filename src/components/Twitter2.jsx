import React from 'react';
// import ReactDOM from 'react-dom/client';
import { BiMessageRounded } from "react-icons/bi";
import { BsRepeat } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { BsUpload } from "react-icons/bs";
import { LuBadgeCheck } from "react-icons/lu";

function Twitter2() {
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
            <p>@Twitter.Oct 4</p>
          </div>
          <div className='tweet-text'>
            <p>Hello literally everyone.</p>
          </div>
        </div>
        <div>
          <div className='tweet-actions'>
            <div>
              <p className='tweet-action'><BiMessageRounded />118.7k</p>
            </div>
            <div >
              <p className='tweet-action'><BsRepeat />785.4k</p>
            </div>
            <div >
              <p className='tweet-action'><CiHeart /> 3.3M</p>
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

export default Twitter2; 