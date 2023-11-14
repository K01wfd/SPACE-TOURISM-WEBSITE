import React, { useEffect, useState } from 'react';
import { data } from '../data.js';
import douglasPng from '../assets/crew/image-douglas-hurley.png';
import douglasWebp from '../assets/crew/image-douglas-hurley.webp';
import markPng from '../assets/crew/image-mark-shuttleworth.png';
import markWebp from '../assets/crew/image-mark-shuttleworth.webp';
import victorPng from '../assets/crew/image-victor-glover.png';
import victorWebp from '../assets/crew/image-victor-glover.webp';
import anoushehPng from '../assets/crew/image-anousheh-ansari.png';
import anoushehWebp from '../assets/crew/image-anousheh-ansari.webp';
function Crew() {
  const [currentCrew, setCurrentCrew] = useState('douglas hurley');
  const crewImages = [
    { person: 'douglas hurley', png: douglasPng, webp: douglasWebp },
    { person: 'mark shuttleworth', png: markPng, webp: markWebp },
    { person: 'victor glover', png: victorPng, webp: victorWebp },
    { person: 'anousheh ansari', png: anoushehPng, webp: anoushehWebp },
  ];

  useEffect(() => {
    const dots = document.querySelectorAll('.dot-indicators button');
    dots.forEach((dot) => {
      dot.addEventListener('click', () => {
        const activeDots = document.querySelectorAll('.activeDot');
        activeDots.forEach((activeDot) => {
          activeDot.classList.remove('activeDot');
          activeDot.setAttribute('aria-selected', false);
        });
        dot.classList.add('activeDot');
        dot.setAttribute('aria-selected', true);
      });
    });
  });
  return (
    <section className='container crew-section d-grid crew-grid flow-y'>
      <h1 className='numbered-title ff-sans-cond letter-spacing-1 uppercase'>
        <span aria-hidden='true'>02</span> Meet your crew
      </h1>

      <div
        className='dot-indicators d-flex'
        role='tablist'
        aria-label='crew member list'
      >
        <button
          className='activeDot'
          aria-selected='true'
          aria-controls='commander-tab'
          role='tab'
          data-image='commander-image'
          tabIndex='0'
          onClick={() => setCurrentCrew('douglas hurley')}
        >
          <span className='sr-only'>The commander</span>
        </button>
        <button
          aria-selected='false'
          aria-controls='mission-tab'
          role='tab'
          data-image='mission-image'
          tabIndex='1'
          onClick={() => setCurrentCrew('mark shuttleworth')}
        >
          <span className='sr-only'>The mission specialist</span>
        </button>
        <button
          aria-selected='false'
          aria-controls='pilot-tab'
          role='tab'
          data-image='pilot-image'
          tabIndex='2'
          onClick={() => setCurrentCrew('victor glover')}
        >
          <span className='sr-only'>The pilot</span>
        </button>
        <button
          aria-selected='false'
          aria-controls='crew-tab'
          role='tab'
          data-image='crew-image'
          tabIndex='3'
          onClick={() => setCurrentCrew('anousheh ansari')}
        >
          <span className='sr-only'>The crew engineer</span>
        </button>
      </div>
      {data.crew.map(
        (crewItem, i) =>
          currentCrew === crewItem.name.toLowerCase() && (
            <article
              key={crewItem.name}
              className='crew-details flow-y'
              id={crewItem.role + 'tab'}
              role='tabpanel'
              tabIndex={i}
            >
              <header className='flow flow--space-small'>
                <h2 className='ff-serif uppercase'>{crewItem.role}</h2>
                <p className='uppercase ff-serif'>{crewItem.name}</p>
              </header>
              <p className='text-accent'>{crewItem.bio}</p>
            </article>
          )
      )}
      {crewImages.map(
        (obj) =>
          obj.person === currentCrew && (
            <picture key={obj.person + 'picture'}>
              <source
                key={obj.person + 'key'}
                srcSet={`${obj.webp} 870w`}
                type='image/webp'
              />
              <img src={obj.png} alt={obj.person + 'image'} />
            </picture>
          )
      )}
    </section>
  );
}

export default Crew;
