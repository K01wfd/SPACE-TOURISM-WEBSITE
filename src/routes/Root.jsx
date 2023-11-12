import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from '../assets/shared/logo.svg';

const pages = ['home', 'destination', 'crew', 'technology'];
function Root() {
  const [background, setBackground] = useState('home');
  const [dataVisible, setDataisible] = useState(false);

  pages.forEach((page) => {
    document.body.classList.remove(page);
    page === background ? document.body.classList.add(background) : '';
  });

  const activeLinks = document.querySelectorAll('.primary-navigation .active');
  console.log(activeLinks);
  activeLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.target.classList.add('active');
    });
  });
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
            className='primary-navigation d-flex underline-indicators'
            data-visible={dataVisible}
            aria-labelledby='nav-toggler'
          >
            <li>
              <Link
                to={'/'}
                onClick={() => setBackground('home')}
                className='uppercase letter-spacing-2 active'
              >
                <span aria-hidden='true'>00</span>Home
              </Link>
            </li>
            <li>
              <Link
                to={'/destination'}
                onClick={() => setBackground('destination')}
                className='uppercase letter-spacing-2'
              >
                <span aria-hidden='true'>01</span>Destination
              </Link>
            </li>
            <li>
              <Link to={'/crew'} className='uppercase letter-spacing-2'>
                <span aria-hidden='true'>02</span>Crew
              </Link>
            </li>
            <li>
              <Link to={'/technology'} className='uppercase letter-spacing-2'>
                <span aria-hidden='true'>03</span>Technology
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Root;
