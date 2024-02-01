import React from 'react';
import ReactDOM from 'react-dom/client';
import { BsStars } from "react-icons/bs";
import { IoImageOutline } from "react-icons/io5";
import { MdOutlineGifBox } from "react-icons/md";
import { CiAlignLeft } from "react-icons/ci";
import { GoSmiley } from "react-icons/go";
import { LuCalendarClock } from "react-icons/lu";

function WhatHappening() {
  return (
    <div>
      <div className='header'>
        <div className='page-title'>
          <h4>Home</h4>
        </div>
        <div>
          <BsStars className='top-tweets'/>
        </div>
      </div>   
        <div className='tweet-editor'>
          <div className='avatar'>
            <img src='src/images/profile-photo.png' 
              alt='avatar' /> 
          </div>
          <div className='tweet-editor-form'>
            <div>
              <textarea 
                placeholder="What's happening?" 
                className='tweet-editor-input'/>
            </div>
            <div className='tweet-editor-buttons'>
              <div className='tweet-editor-actions'>
                <IoImageOutline />
                <MdOutlineGifBox />
                <CiAlignLeft />
                <GoSmiley />
                <LuCalendarClock />
              </div>
              <div>
                <button className='button'>
                  Tweet
                </button>
              </div>
              </div>
            </div>
          </div>
  </div>
  )
}

export default WhatHappening; 