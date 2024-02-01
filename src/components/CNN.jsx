import React from 'react';
// import ReactDOM from 'react-dom/client';
import { BiMessageRounded } from "react-icons/bi";
import { BsRepeat } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { BsUpload } from "react-icons/bs";
import { LuBadgeCheck } from "react-icons/lu";

function CNN() {
  return (
      <div className='tweet'>
        <div className='tweet-avatar'>
          <img src='src/images/cnn_logo.png' 
            alt='cnn-avatar' />
        </div>
        <div className='tweet-content'>
          <div className='tweet-body'>
            <div className='tweet-title'>
              <h4>CNN</h4>
              <LuBadgeCheck />
              <p>@CNN.7m</p>
            </div>
            <div className='tweet-text'>
              <p>President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a ‘major breakthrough’ that would serve to both strengthen the US steel industry and combat the global climate crisis. 
              </p>
            </div>
          </div>
          <div>
            <div className='tweet-actions'>
              <div>
                <p className='tweet-action'><BiMessageRounded />57</p>
              </div>
              <div >
                <p className='tweet-action'><BsRepeat/>144</p>
              </div>
              <div >
                <p className='tweet-action'><CiHeart /> 184</p>
              </div>
              <div >
                <BsUpload/>
              </div>
            </div>
          </div>
        </div>
        
  </div>
        
  );
}

export default CNN
