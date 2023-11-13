import React, { useEffect, useState } from 'react';
import logo from './assets/shared/logo.svg';
import Home from './routes/Home';

function App() {
  const pages = ['home', 'destinations', 'crew', 'technology'];
  const [background, setBackground] = useState('home');
  const [dataVisible, setDataisible] = useState(false);

  pages.forEach((page) => {
    document.body.classList.remove(page);
    page === background ? document.body.classList.add(background) : '';
  });

  useEffect(() => {
    const links = document.querySelectorAll('.primary-navigation a');
    links.forEach((link) => {
      link.addEventListener('click', (e) => {
        let activeLinks = document.querySelectorAll('.active');
        activeLinks.forEach((activeLink) => {
          activeLink.classList.remove('active');
        });
        link.classList.add('active');
      });
    });
  }, [background]);
  return (
    <>
      <header className='primary-header d-flex fs-300-main'>
        <div>
          <img src={logo} alt='space tourism logo' className='logo' />
        </div>
        <div className='hr'></div>
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
            className='primary-navigation d-flex underline-indicators ff-sans-cond fs-300-main'
            data-visible={dataVisible}
            aria-labelledby='nav-toggler'
          >
            <li>
              <a
                href='#'
                onClick={() => setBackground('home')}
                className='uppercase letter-spacing-2 active'
              >
                <span aria-hidden='true'>00</span>Home
              </a>
            </li>
            <li>
              <a
                href='#'
                onClick={() => setBackground('destination')}
                className='uppercase letter-spacing-2'
              >
                <span aria-hidden='true'>01</span>Destination
              </a>
            </li>
            <li>
              <a
                href='#'
                onClick={() => setBackground('crew')}
                className='uppercase letter-spacing-2'
              >
                <span aria-hidden='true'>02</span>Crew
              </a>
            </li>
            <li>
              <a
                href='#'
                onClick={() => setBackground('technology')}
                className='uppercase letter-spacing-2'
              >
                <span aria-hidden='true'>03</span>Technology
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main>{background === 'home' && <Home />}</main>
    </>
  );
}

export default App;
