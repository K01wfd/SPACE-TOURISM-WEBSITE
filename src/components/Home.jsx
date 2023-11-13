import React from 'react';

function Home({ onExplore }) {
  return (
    <section className='home-section container d-flex flow-y flow-y--small'>
      <div className='flow-y home-details'>
        <p className='ff-sans-cond text-accent uppercase letter-spacing-1 fs-500-second'>
          So, you want to travel to
        </p>
        <h1 className='uppercase ff-serif'>Space</h1>
        <p className='text-accent'>
          Let&apos;s face it; if you want to go to space, you might as well
          genuinely go to outer space and not hover kind of on the edge of it.
          Well sit back, and relax because we&apos;ll give you a truly out of
          this world experience!
        </p>
      </div>

      <div className='btn-box'>
        <a
          href='#'
          className='explore-btn uppercase ff-serif'
          onClick={onExplore}
        >
          Explore
        </a>
      </div>
    </section>
  );
}

export default Home;
