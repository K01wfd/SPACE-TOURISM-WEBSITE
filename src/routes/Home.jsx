import React from 'react';

function Home() {
  return (
    <section className='home-section container d-flex flow-y flow-y--small'>
      <div className='flow-y'>
        <p className='ff-sans-cond text-accent uppercase letter-spacing-1 fs-500-second'>
          So, you want to travel to
        </p>
        <h1 className='uppercase fs-900 ff-serif'>Space</h1>
        <p className='text-accent fs-400'>
          Let&apos;s face it; if you want to go to space, you might as well
          genuinely go to outer space and not hover kind of on the edge of it.
          Well sit back, and relax because we&apos;ll give you a truly out of
          this world experience!
        </p>
      </div>

      <a href='#' className='explore-btn uppercase ff-serif fs-600-main '>
        Explore
      </a>
    </section>
  );
}

export default Home;
