import React from 'react';
// import ReactDOM from 'react-dom/client';
import { BiMessageRounded } from "react-icons/bi";
import { BsRepeat } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { BsUpload } from "react-icons/bs";
import { LuBadgeCheck } from "react-icons/lu";

function NewYorkTimes() {
  return (
    <div className='tweet'>
      <div className='tweet-avatar'>
            <img src='src/images/Tweet-Profile-Photo.png'/>
      </div>
      <div className='tweet-content'>
        <div className='tweet-body'>
          <div className='tweet-title'>
              <h4>The New York Times</h4>
              <LuBadgeCheck />
              <p>@nytimes.2h</p>
            </div>
            <div className='tweet-text'>
              <p>Gardening boomed during the pandemic. Six black writers share how it has helped them re-establish, and reimagine, a connection to cultivation and the land. 
              </p>
            </div>
          </div>
          <div className='tweet-image'>
            <img src='src/images/tweet-image.png' alt="tweetimage"/>
          </div>
        <div className='tweet-actions'>
        <div>
          <p className='tweet-action'>                                  <BiMessageRounded />57
          </p>
        </div>
        <div> 
            <p className='tweet-action'>          
              <BsRepeat/>144</p>
          </div>
          <div >
            <p className='tweet-action'>
              <CiHeart /> 184
            </p>
          </div>
          <div >
            <BsUpload/>
          </div>
        </div>
        </div>
        </div>
       
  )
}

export default NewYorkTimes; 
