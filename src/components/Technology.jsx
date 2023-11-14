import React, { useEffect, useState } from 'react';
import { data } from '../data.js';
import vehicle from '../assets/technology/image-launch-vehicle-portrait.jpg';
import vehicleand from '../assets/technology/image-launch-vehicle-landscape.jpg';
import spaceport from '../assets/technology/image-spaceport-portrait.jpg';
import spaceportLand from '../assets/technology/image-spaceport-landscape.jpg';
import spaceCapsule from '../assets/technology/image-space-capsule-portrait.jpg';
import spaceCapsuleLand from '../assets/technology/image-space-capsule-landscape.jpg';

const techImages = [
  { tech: 'launch vehicle', portrait: vehicle, landscape: vehicleand },
  { tech: 'spaceport', portrait: spaceport, landscape: spaceportLand },
  {
    tech: 'space capsule',
    portrait: spaceCapsule,
    landscape: spaceCapsuleLand,
  },
];
function Technology() {
  const [currentTech, setCurrentTech] = useState('launch vehicle');

  useEffect(() => {
    const listNumbers = document.querySelectorAll('.numberedList button');
    listNumbers.forEach((number) => {
      number.addEventListener('click', () => {
        const activeListNumbers =
          document.querySelectorAll('.activeListNumber');
        activeListNumbers.forEach((activeNumber) => {
          activeNumber.classList.remove('activeListNumber');
          activeNumber.setAttribute('aria-selected', false);
        });
        number.classList.add('activeListNumber');
        number.setAttribute('aria-selected', true);
      });
    });
  }, [currentTech]);
  return (
    <section className='technology-section technology-grid d-grid flow-y'>
      <h1 className='numbered-title ff-sans-cond letter-spacing-1 uppercase'>
        <span aria-hidden='true'>02</span> Space Launch 101
      </h1>

      <div
        className='numberedList d-flex'
        role='tablist'
        aria-label='used technology list'
      >
        <button
          className='activeListNumber'
          aria-selected='true'
          aria-controls='launchvehicle-tab'
          role='tab'
          data-image='launch-vehicle-image'
          tabIndex='0'
          onClick={() => setCurrentTech('launch vehicle')}
        >
          <span className='sr-only'>The Launch Vehicle</span>
          <span aria-hidden='true'>1</span>
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
          <span aria-hidden='true'>2</span>
        </button>
        <button
          aria-selected='false'
          aria-controls='spacecapsule-tab'
          role='tab'
          data-image='space-capsule-image'
          tabIndex='2'
          onClick={() => setCurrentTech('space capsule')}
        >
          <span className='sr-only'>The Space Capsule</span>
          <span aria-hidden='true'>3</span>
        </button>
      </div>
      {data.technology.map(
        (tech, i) =>
          currentTech === tech.name.toLowerCase() && (
            <article
              key={tech.id}
              className='technology-details flow-y'
              id={`${tech.id}-tab`}
              role='tabpanel'
              tabIndex={i}
            >
              <header className='flow-y'>
                <h2 className='ff-sans-cond text-accent uppercase letter-spacing-2'>
                  The terminology...
                </h2>
                <p className='uppercase ff-serif'>{tech.name}</p>
              </header>
              <p className='text-accent'>{tech.description}</p>
            </article>
          )
      )}
      {techImages.map(
        (image) =>
          currentTech === image.tech && (
            <picture key={image.tech}>
              <source media='(max-width: 870px)' srcSet={image.landscape} />
              <source media='(min-width: 871px)' srcSet={image.portrait} />
              <img src={image.portrait} />
            </picture>
          )
      )}
    </section>
  );
}

export default Technology;
