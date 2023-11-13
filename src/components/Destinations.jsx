import React, { useEffect, useState } from 'react';
import { data } from '../data.js';
import moonWebp from '../assets/destination/image-moon.webp';
import moonPng from '../assets/destination/image-moon.png';
import marsWebp from '../assets/destination/image-mars.webp';
import marsPng from '../assets/destination/image-mars.png';
import europaWebp from '../assets/destination/image-europa.webp';
import europaPng from '../assets/destination/image-europa.png';
import titanWebp from '../assets/destination/image-titan.webp';
import titanPng from '../assets/destination/image-titan.png';
import Destination from './Destination.jsx';
function Destinations() {
  const [currentDest, setCurrentDest] = useState('moon');

  const destImages = [
    { dest: 'moon', png: moonPng, webp: moonWebp },
    { dest: 'mars', png: marsPng, webp: marsWebp },
    { dest: 'europa', png: europaPng, webp: europaWebp },
    { dest: 'titan', png: titanPng, webp: titanWebp },
  ];
  useEffect(() => {
    const tabs = document.querySelectorAll("button[role='tab']");
    tabs.forEach((tab, i) => {
      tab.addEventListener('click', (e) => {
        let tabsWithActive = document.querySelectorAll('.activeTab');
        tabsWithActive.forEach((activeTab) => {
          activeTab.classList.remove('activeTab');
          activeTab.setAttribute('aria-selected', false);
        });

        e.target.classList.add('activeTab');
        e.target.setAttribute('aria-selected', true);
      });
    });
  }, [currentDest]);
  return (
    <section className='container destinations-section d-grid destination-grid flow-y'>
      <h1 className='uppercase ff-sans-cond letter-spacing-1 fs-500-second numbered-title'>
        <span aria-hidden='true'>01</span>Pick your destination
      </h1>
      <div
        className='tab-list underline-indicators d-flex'
        role='tablist'
        aria-label='destination list'
      >
        <button
          aria-selected='true'
          role='tab'
          aria-controls='moon-tab'
          className='uppercase ff-sans-cond text-accent letter-spacing-2 fs-300-main activeTab'
          tabIndex='0'
          onClick={() => setCurrentDest('moon')}
        >
          Moon
        </button>
        <button
          aria-selected='false'
          role='tab'
          aria-controls='mars-tab'
          className='uppercase ff-sans-cond text-accent letter-spacing-2 fs-300-main'
          tabIndex='1'
          onClick={() => setCurrentDest('mars')}
        >
          Mars
        </button>
        <button
          aria-selected='false'
          role='tab'
          aria-controls='europa-tab'
          className='uppercase ff-sans-cond text-accent letter-spacing-2 fs-300-main'
          tabIndex='2'
          onClick={() => setCurrentDest('europa')}
        >
          Europa
        </button>
        <button
          aria-selected='false'
          role='tab'
          aria-controls='titan-tab'
          className='uppercase ff-sans-cond text-accent letter-spacing-2 fs-300-main'
          tabIndex='3'
          onClick={() => setCurrentDest('titan')}
        >
          Titan
        </button>
      </div>
      {data.destinations.map((destination, i) =>
        destination.name.toLowerCase() === currentDest ? (
          <Destination
            key={i}
            imagePng={destImages[i].png}
            imageWebp={destImages[i].webp}
            title={destination.name}
            details={destination.description}
            metaDistance={destination.distance}
            metaTime={destination.travel}
            tabIndex={i}
            id={destination.name.toLowerCase()}
          />
        ) : null
      )}
    </section>
  );
}

export default Destinations;
