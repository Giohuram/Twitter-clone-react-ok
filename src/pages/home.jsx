import React from 'react';

function Home() {
  return (
    <main className="timeline">
      <div className='header'>
        <h3>Home</h3>
        <img src="src/images/Icons/Timeline-Prop.png" alt="star-icon"/>
      </div>
      <div className='tweet-area'>
        <div className='profile-pik'>
          <img src="" />
        </div>
        <div className='tweet-editor'>
          <textarea className='tweet-editor-form tweet-editor-input'placeholder="what's happening here?"></textarea>
          <div className="tweet-editor-buttons">
          <img 
            src="src/images/Icons/Media.png"
            alt="Media"  
          />
          <img 
            src="src/images/Icons/Gif.png"
            alt="Gif"  
          />
          <img 
            src="src/images/Icons/Poll.png"
            alt="Poll-icon"  
          />
          <img 
            src="src/images/Icons/Emoji.png"
            alt="Emoji"  
          />
          <img 
            src="src/images/Icons/Schedule.png"
            alt="Schedule"  
          />
          <div className='tweet-editor-actions button'>
            <button className='button'>Tweet</button>
          </div>
        </div>
          
        </div>
      </div>
      <div className='Tweets'>
      </div>
    </main>
  );
}

export default Home;