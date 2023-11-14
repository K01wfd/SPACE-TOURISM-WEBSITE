import React, { useState } from 'react';
import vehicle from '../assets/technology/image-launch-vehicle-portrait.jpg';
import vehicleand from '../assets/technology/image-launch-vehicle-landscape.jpg';
import spaceport from '../assets/technology/image-spaceport-portrait.jpg';
import spaceportLand from '../assets/technology/image-spaceport-landscape.jpg';
function Technology() {
  const [currentTech, setCurrentTech] = useState('launch vehicle');
  return (
    <section className='container crew-section d-grid flow-y'>
      <h1 className='numbered-title ff-sans-cond letter-spacing-1 uppercase'>
        <span aria-hidden='true'>02</span> Space Launch 101
      </h1>

      <div
        className='numberedList d-flex'
        role='tablist'
        aria-label='used technology list'
      >
        <button
          className=''
          aria-selected='true'
          aria-controls='launch-vehicle-tab'
          role='tab'
          data-image='launch-vehicle-image'
          tabIndex='0'
          onClick={() => setCurrentTech('launch vehicle')}
        >
          <span className='sr-only'>The Launch Vehicle</span>
        </button>
        <button
          aria-selected='false'
          aria-controls='spaceport-tab'
          role='tab'
          data-image='spaceport-image'
          tabIndex='1'
          onClick={() => setCurrentTech('spaceport')}
        >
          <span className='sr-only'>The Spaceport</span>
        </button>
        <button
          aria-selected='false'
          aria-controls='space-capsule-tab'
          role='tab'
          data-image='space-capsule-image'
          tabIndex='2'
          onClick={() => setCurrentTech('space-capsule')}
        >
          <span className='sr-only'>The Space Capsule</span>
        </button>
      </div>
      <article
        key={1}
        className='technology details flow-y'
        id='commander-tab'
        role='tabpanel'
        tabIndex={i}
      >
        <header className='flow flow--space-small'>
          <h2 className='ff-serif uppercase'>{crewItem.role}</h2>
          <p className='uppercase ff-serif'>{crewItem.name}</p>
        </header>
        <p className='text-accent'>{crewItem.bio}</p>
      </article>
    </section>
  );
}

export default Technology;
