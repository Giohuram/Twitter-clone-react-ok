import React from 'react';
import CNN from '../components/CNN';
import NewYorkTimes from '../components/NewYorkTimes';
import Twitter1 from '../components/Twitter1';
import Twitter2 from '../components/Twitter2';
import WhatHappening from '../components/WhatHappening';

function Home() {
  return (
    <main className="timeline">
      <div>
        <WhatHappening />
      </div>
      <div className='tweets'>
        <div>
          <CNN />
        </div>
        <div>
          <NewYorkTimes />
        </div>
        <div>
          <Twitter1 />
        </div>
        <div>
          <Twitter2 />
        </div>
      </div>
    </main>
  );
}

export default Home;