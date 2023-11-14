import React, { useEffect, useState } from 'react';
import logo from './assets/shared/logo.svg';
import Home from './components/Home';
import Destinations from './components/Destinations';
import Crew from './components/Crew';
import Technology from './components/Technology';

function App() {
  const pages = ['home', 'destination', 'crew', 'technology'];
  const [background, setBackground] = useState('home');
  const [dataVisible, setDataisible] = useState(false);

  pages.forEach((page) => {
    document.body.classList.remove(page);
    page === background ? document.body.classList.add(background) : '';
  });

  useEffect(() => {
    const links = document.querySelectorAll('.primary-navigation a');
    const activeLinks = document.querySelectorAll('.active');

    links.forEach((link, i) => {
      activeLinks.forEach((activeLink) => {
        activeLink.classList.remove('active');
      });
      if (background === link.dataset.id) {
        link.classList.add('active');
      }
    });
  }, [background]);
  return (
    <>
      <header className='primary-header d-flex'>
        <div>
          <img src={logo} alt='space tourism logo' className='logo' />
        </div>
        <button
          id='nav-toggler'
          className='mobile-nav-toggle'
          aria-controls='primary-navigation'
          onClick={() => setDataisible(!dataVisible)}
          aria-expanded={dataVisible}
        >
          <span className='sr-only'>Menu</span>
        </button>
        <nav>
          <ul
            id='primary-navigation'
            className='primary-navigation d-flex ff-sans-cond'
            data-visible={dataVisible}
            aria-labelledby='nav-toggler'
          >
            <li>
              <a
                href='#'
                onClick={() => setBackground('home')}
                className='uppercase letter-spacing-2 active'
                data-id='home'
              >
                <span aria-hidden='true'>00</span>Home
              </a>
            </li>
            <li>
              <a
                href='#'
                onClick={(e) => setBackground('destination')}
                className='uppercase letter-spacing-2'
                data-id='destination'
              >
                <span aria-hidden='true'>01</span>Destination
              </a>
            </li>
            <li>
              <a
                href='#'
                onClick={() => setBackground('crew')}
                className='uppercase letter-spacing-2'
                data-id='crew'
              >
                <span aria-hidden='true'>02</span>Crew
              </a>
            </li>
            <li>
              <a
                href='#'
                onClick={() => setBackground('technology')}
                className='uppercase letter-spacing-2'
                data-id='technology'
              >
                <span aria-hidden='true'>03</span>Technology
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        {background === 'home' && (
          <Home onExplore={() => setBackground('destination')} />
        )}{' '}
        {background === 'destination' && <Destinations />}
        {background === 'crew' && <Crew />}
        {background === 'technology' && <Technology />}
      </main>
    </>
  );
}

export default App;
